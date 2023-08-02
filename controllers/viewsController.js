const { default: axios } = require('axios');
const User = require('../models/userModel');

exports.getOverview = async (req, res, next) => {
  //1) Get tour data from collection
  const tours = await Tour.find();

  //2) Build template

  //3) Render thaat template using tour data from one
  res.status(200).render('overview', {
    title: 'All tours',
    tours,
  });
};

exports.getTour = (req, res) => {
  //Slug is the id we have passed in view url
  // req.params.slug

  res.status(200).render('tour', {
    title: 'Individual Info',
  });
};

exports.setLogin = (req, res) => {
  res.status(200).render('login', {
    title: 'User login',
  });
};

exports.getAccount = (req, res) => {
  res.status(200).render('account', {
    title: 'Your Account',
  });
};

exports.warehouseOneTwo = async (req, res) => {
  const { data } = await axios.get(
    'https://script.googleusercontent.com/macros/echo?user_content_key=Pz44KbLeK9X4gULuE9Y7tfZufEtQDvWKd_R12bbzA8i6MJEtDzyq3tQq-JZBLWnQOPSyQo0JGaMNJvZmjTDSNLw8H25QnHc1m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKooo5oL873M3V2n_1SHPDX62VuZkHacpZ2U4r5G3_r6Ou16oFv0T08VxJmRJpXbS8eXWXXa1LLnCW41D3qU3DKQy6gW-_Rpeg&lib=MW8rkVqNzYSQZl_gZuXusDUqO0XQ_ydfb'
  );

  // const { json } = await axios.get(
  //   'https://script.googleusercontent.com/macros/echo?user_content_key=Pz44KbLeK9X4gULuE9Y7tfZufEtQDvWKd_R12bbzA8i6MJEtDzyq3tQq-JZBLWnQOPSyQo0JGaMNJvZmjTDSNLw8H25QnHc1m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKooo5oL873M3V2n_1SHPDX62VuZkHacpZ2U4r5G3_r6Ou16oFv0T08VxJmRJpXbS8eXWXXa1LLnCW41D3qU3DKQy6gW-_Rpeg&lib=MW8rkVqNzYSQZl_gZuXusDUqO0XQ_ydfb'
  // );

  // console.log(json.data);

  res.render('warehouseOneTwo', {
    stuffingReportWarehouseOneTwo: data.data,
    title: 'Warehouse 1-2 Report',
  });
};

// function getData()

exports.warehouseThree = (req, res) => {
  res.status(200).render('warehouseThree', {
    title: 'Warehouse Three',
  });
};

exports.signUp = (req, res) => {
  res.status(200).render('signUp', {
    title: 'Sign Up',
  });
};

exports.allUsers = async (req, res) => {
  //1) Get Users data from collection
  const users = await User.find();
  console.log(users);
  res.status(200).render('allUsers', {
    users,
    title: 'Users',
  });
};

exports.myHome = (req, res) => {
  res.status(200).render('base', {
    title: 'Home ',
  });
};
