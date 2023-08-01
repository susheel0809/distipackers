const { default: axios } = require('axios');
const Tour = require('../models/tourModel');

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
    'https://script.googleusercontent.com/macros/echo?user_content_key=t6MtSHYcLSA1rYUsgmi15KNAVgNcRWYYoV6Shu5LusJrQN6eIsxtbZH1M1VbV9QfA9QIfvh0o7rGTuyiB1SFQJzCFuWexPxom5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCupv9ZraWSw0NL9mtvGNfIq4PB0JIeLcCkG1lM_XVeZe5Vmoew7m9C9d-ASkKw0__PVHCrdnglMKKAmZg64u8kqHgwmXBBXWtz9Jw9Md8uu&lib=MIAm_Kgor3BeFH3Gjej52bzWkEKQozq2-'
  );

  res.render('gateway', {
    stuffingReportWarehouseOneTwo: data.data,
    title: 'Warehouse 1-2 Report',
  });
};

exports.signUp = (req, res) => {
  res.status(200).render('signUp', {
    title: 'Sign Up',
  });
};
