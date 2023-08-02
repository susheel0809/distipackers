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

exports.warehouseThree = async (req, res) => {
  var { data } = await axios.get(
    'https://script.googleusercontent.com/macros/echo?user_content_key=qAfwgfrHfVlvuOcPtbDDJbjx_YYvaPttyZNYCHSahdjSQczRr2qFgDFj86n2JHjhS_2-UwyflFRRhuciLTLo-lFIQ3LPZCFPm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnGRBB_UEiI4Dln0fnBFqm76EnHOce_ZDP3yX8Dv7nU_2DVd4Ficzn8kbzh-ikD2p_vQNL2VYtVD5-0TKUMjmvFUmCMgUb9Pau9z9Jw9Md8uu&lib=MzFsmOfzUWvArIz4A7cM7CTWkEKQozq2-'
  );
  console.log(data);
  stuffingDataSet = data;
  console.log('----------');
  console.log(stuffingDataSet);

  var { data } = await axios.get(
    'https://script.googleusercontent.com/macros/echo?user_content_key=YBiD6qDyLRHAN9qQi_kZeeU7r9cfXRADeuD3MrrpM8RlTU-VWIE4IwbaMkrHv78Na9dhjkI8w2K0bRV_29YQ96YduIp9AQHfm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIys2KwcMpvaW1tDvxIDU5F8xRVvIfvMwKcwpEbkxgqj-U4Tcik2RkCPsWSu1XxTnpEky7NMoliHTARZMXhJX7asnhEVI65Uc9z9Jw9Md8uu&lib=MzFsmOfzUWvArIz4A7cM7CTWkEKQozq2-'
  );
  console.log(data);
  console.log('********');
  projectDetails = data;
  console.log(projectDetails);

  res.status(200).render('warehouseThree', {
    title: 'Warehouse Three',
    stuffingReportWarehouseThree: stuffingDataSet.data,
    stuffingProjectDetails: projectDetails.data,
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
