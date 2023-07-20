const express = require('express');
const { json } = require('express');
const User = require('./../models/userModel');
const jwt = require('jsonwebtoken');
const { token } = require('morgan');
const { promisify } = require('util');
const { decode } = require('punycode');

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
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

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    console.log(decoded.toString + 'decode');

    //3) check if user still exist
    console.log('User id ' + decoded._id);

    const freshUser = await User.findById(decoded._id);

    if (!freshUser) {
      return res.status(401).json({
        status: 'fail',
        message: 'User belongs to this token doesnt exist',
      });
    }

    //4) check if user changed the password after the jwt issues
    next();
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
