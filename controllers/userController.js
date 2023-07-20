const User = require('./../models/userModel');
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

exports.updateUser = (req, res) => {
  res.status(500).json({
    staus: 'error',
    message: 'This route is not yet defined',
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    staus: 'error',
    message: 'This route is not yet defined',
  });
};
