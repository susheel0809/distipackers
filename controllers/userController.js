const User = require('./../models/userModel');
const sendEmail = require('./../utils/email');

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: 'success',
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      staus: 'error',
      results: users.length,
      message: err.message,
    });
  }
};

exports.getUser = (req, res) => {
  res.status(500).json({
    staus: 'error',
    message: 'This route is not yet defined',
  });
};

exports.createUser = (req, res) => {
  res.status(500).json({
    staus: 'error',
    message: 'This route is not yet defined',
  });
};

exports.updateUser = async (req, res) => {
  // console.log(req.file);
  // console.log(body);
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    // const inActive = `Hi ${user.name}. You access to the dashboard application has been revoked`;
    // const active = `Hi ${user.name}. You access to the dashboard application has been granted`;

    // if (!user || user.active) {
    //   sendEmail({
    //     email: user.email,
    //     subject: 'Access Granted',
    //     message: active,
    //   });
    // } else if (!user || !user.active) {
    //   sendEmail({
    //     email: user.email,
    //     subject: 'Access Revoked',
    //     message: inActive,
    //   });
    // }

    res.status(200).json({
      status: 'success',
      data: { user },
    });
  } catch (err) {
    res.status(500).json({
      staus: 'error',
      message: err,
    });
  }
};

exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: 'success',
    message: 'User Deleted',
  });
};
