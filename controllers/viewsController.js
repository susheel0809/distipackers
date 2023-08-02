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
  //stuffing report
  var { data } = await axios.get(
    'https://script.googleusercontent.com/macros/echo?user_content_key=Pz44KbLeK9X4gULuE9Y7tfZufEtQDvWKd_R12bbzA8i6MJEtDzyq3tQq-JZBLWnQOPSyQo0JGaMNJvZmjTDSNLw8H25QnHc1m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKooo5oL873M3V2n_1SHPDX62VuZkHacpZ2U4r5G3_r6Ou16oFv0T08VxJmRJpXbS8eXWXXa1LLnCW41D3qU3DKQy6gW-_Rpeg&lib=MW8rkVqNzYSQZl_gZuXusDUqO0XQ_ydfb'
  );
  stuffingDataSet = data;

  //stuffing project details
  var { data } = await axios.get(
    'https://script.google.com/macros/s/AKfycbwO1rAWoKTGpFoQ3iTuMRuuGLtGls69X2gqgUOhON-vPnUH8oNfqS1m5P3ddAErRxb4/exec'
  );
  stuffingProject = data;

  // carting project details
  var { data } = await axios.get(
    'https://script.googleusercontent.com/macros/echo?user_content_key=9ps-rtEIShoLUMcDC1oifcwNfMoSzAu2ZxCNMJk71sLC5uKAdD9OhF9vz0fj7X-opkW6Fv1MfibUjDfl1JoA_rC_c-XPB7bDm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnH0sfn7Co64_k9yoaRKhcZzK2dJ1SJ4mXqhcmgJlxP-27B3glFl51R9rqkFYD5r99xRHaSOVQvfO4kQZmuTEmRyX70tbOYaRIdz9Jw9Md8uu&lib=MIAm_Kgor3BeFH3Gjej52bzWkEKQozq2-'
  );
  cartingProject = data;

  //carting data set
  var { data } = await axios(
    'https://script.googleusercontent.com/macros/echo?user_content_key=ao-QYwwq4N4affaXYw_nj8N8yYslm6JM8FAucAhmAqsX3sYkDx0LzYwLQmZO21POzlpDBSX7Xh8bnp_C--XrurPznBCbbYEdm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCupv9ZraWSw0NL9mtvGNfIq4PB0JIeLcCkG1lM_XVeZe5Vmoew7m9C9d-ASkKw0__PVHCrdnglMKKAmZg64u8kqHgwmXBBXWtz9Jw9Md8uu&lib=MIAm_Kgor3BeFH3Gjej52bzWkEKQozq2-'
  );
  catringDataset = data;

  res.render('warehouseOneTwo', {
    stuffingReportWarehouseOneTwo: stuffingDataSet.data,
    stuffingProjectDetailsOne: stuffingProject.data,
    cartingProjectDetails: cartingProject.data,
    cartingDataSetOneTwo: catringDataset.data,
    title: 'Warehouse 1-2 Report',
  });
};

// function getData()

exports.warehouseThree = async (req, res) => {
  //stuffing data set
  var { data } = await axios.get(
    'https://script.googleusercontent.com/macros/echo?user_content_key=qAfwgfrHfVlvuOcPtbDDJbjx_YYvaPttyZNYCHSahdjSQczRr2qFgDFj86n2JHjhS_2-UwyflFRRhuciLTLo-lFIQ3LPZCFPm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnGRBB_UEiI4Dln0fnBFqm76EnHOce_ZDP3yX8Dv7nU_2DVd4Ficzn8kbzh-ikD2p_vQNL2VYtVD5-0TKUMjmvFUmCMgUb9Pau9z9Jw9Md8uu&lib=MzFsmOfzUWvArIz4A7cM7CTWkEKQozq2-'
  );
  stuffingDataSet = data;

  //stuffin project details
  var { data } = await axios.get(
    'https://script.googleusercontent.com/macros/echo?user_content_key=YBiD6qDyLRHAN9qQi_kZeeU7r9cfXRADeuD3MrrpM8RlTU-VWIE4IwbaMkrHv78Na9dhjkI8w2K0bRV_29YQ96YduIp9AQHfm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIys2KwcMpvaW1tDvxIDU5F8xRVvIfvMwKcwpEbkxgqj-U4Tcik2RkCPsWSu1XxTnpEky7NMoliHTARZMXhJX7asnhEVI65Uc9z9Jw9Md8uu&lib=MzFsmOfzUWvArIz4A7cM7CTWkEKQozq2-'
  );
  projectDetails = data;

  //carting project details
  var { data } = await axios.get(
    'https://script.googleusercontent.com/macros/echo?user_content_key=lS0nz0j7yGT5BJiBhTqKZX43lNAZltOh-iPDQde5cCRAuYBnRrkYR0g5KwWDjJOvyN4wvBrC3BzTJicjIZkbmhWSOBBq6E0Mm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHBjMRiu73KiM0Ck-sqoKJZEBlMK3RlrcQ80zj0ePngtk-K7bJeMBmwLVql_gzH8j75cApUyhvDfYUk6Lgxr2r9zkLsfhVDiVQ&lib=MV7flkd5QHatBU_iSbV45kUqO0XQ_ydfb'
  );
  cartingProject = data;

  //carting dataset
  var { data } = await axios.get(
    'https://script.googleusercontent.com/macros/echo?user_content_key=pDLlNOUXhZ3B5LGUktwDl5GRQeTDovldWgDUGtgrHQWyMTvVYvRnwYHEEILtWLxx1htg16gEZrNXqC-tJ4Bh_s9DM4Jjt68mm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLLTKCXIto1-n2ORA-Vh8tDxRwn3s50_VYDqdgyENjdoax8wR5IIBzu3wA0N5a33KVzrwi6YKv8IYCMqZjoYeGPTowz9C9rokA&lib=MV7flkd5QHatBU_iSbV45kUqO0XQ_ydfb'
  );
  cartingDataSet = data;

  //carting chart
  const cartingOptions = {
    title: "Carting's Status",
    vAxis: { title: 'Numbers' },
    hAxis: { title: 'Consolidator' },
    seriesType: 'bars',
    series: { 6: { type: 'line' } },
  };

  // var { data } = await axios.get(
  //   'https://script.googleusercontent.com/macros/echo?user_content_key=-O4cGL2DRNtE45mXGuRCjNSzXZDrKOGVW6KCyg9X_wYwuS1D6doNZZKkmtkdQYWN1CsY-9hPwjw_wiMZFcS6yKU2p-v7aIPSm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHvoCcOboXKdiWu2DQ1Yyn4SfLVKf4cn2t39hvuAsXpDSBq788eMGRL8NM5nSq01M7yySfga8BbJ_TghSbWodhuuwjhMb0MiNQ&lib=MV7flkd5QHatBU_iSbV45kUqO0XQ_ydfb'
  // );

  // cartingChart = data;

  // const chart = await google.visualization.ComboChart(
  //   document.getElementById('chart_div')
  // );

  // chart.draw(cartingChart, cartingOptions);

  res.status(200).render('warehouseThree', {
    title: 'Warehouse Three',
    stuffingReportWarehouseThree: stuffingDataSet.data,
    stuffingProjectDetails: projectDetails.data,
    cartingProjectDetails: cartingProject.data,
    cartingDataSetThree: cartingDataSet.data,
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
