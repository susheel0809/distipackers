const express = require('express');
const { json } = require('express');
const User = require('./../models/userModel');
const jwt = require('jsonwebtoken');
const { token } = require('morgan');
const { promisify } = require('util');
const { decode } = require('punycode');
const sendEmail = require('./email');

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      role: req.body.role,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.status(201).json({
      status: 'Success',
      token,
      data: {
        newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //1 check if email and password is exist
    if (!email || !password) {
      throw new Error('Please provide email and password.!');
    }

    //2 check if user is exist and password is correct
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(400).json({
        status: 'fail',
        message: 'Incorrect email or password ',
      });
    }
    console.log(user + 'Usr');
    //3 if everything is ok send token to client
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.status(200).json({
      status: 'success',
      token,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.protect = async (req, res, next) => {
  try {
    //1) getting token and check of its there
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        status: 'fail',
        message: 'You are not logged in please login to get accesss..!',
      });
    }

    // console.log(token);
    //2) verification token

    const mySec = process.env.JWT_SECRET;
    console.log(mySec + ' Secret of jwt');
    const decoded = await promisify(jwt.verify)(token, mySec);

    console.log(decoded.toString + 'decode');

    //3) check if user still exist
    console.log('User id ' + decoded.id);

    const freshUser = await User.findById(decoded.id);

    if (!freshUser) {
      return res.status(401).json({
        status: 'fail',
        message: 'User belongs to this token doesnt exist',
      });
    }

    //4) check if user changed the password after the jwt issues
    if (freshUser.changePasswordAfter(decoded.iat)) {
      return res.status(401).json({
        satus: 'fail',
        message: 'Please login again',
      });
    }
    req.user = freshUser;
    next();
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.restrictTo = (...role) => {
  return (req, res, next) => {
    try {
      //roles in array admin,lead-guy
      if (!role.includes(req.user.role)) {
        throw new Error('You are not authorized to delete it');
      }
      next();
    } catch (err) {
      res.status(401).json({
        status: 'fail',
        message: err.message,
      });
    }
  };
};

exports.forgotPassword = async (req, res, next) => {
  //get the user based on posted email
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      throw new Error(
        'There is no user with this email address ' + req.body.email
      );
    }

    //2) Generate a random reset token
    const resetToken = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false });

    //send it to users email
    const resetURL = `${req.protocol}://${req.get(
      'host'
    )}/api/v1/users/resetPassword/${resetToken}`;

    const message = `Forgot your password ? submit a patch request with your new password and password confirm to 
    ${resetURL}./n If you didn't forgot yur password Please ignore this email...!`;

    await sendEmail({
      email: user.email,
      subject: 'Your password reset token',
      message,
    });

    res.status(200).json({
      status: 'success',
      message: 'Token sent to email',
    });
    next();
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
