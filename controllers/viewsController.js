const { default: axios } = require('axios');
const User = require('../models/userModel');
const exceljs = require('exceljs');
const supergent = require('superagent');
const { Route } = require('express');

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

console.log('@ for 1');

exports.warehouseOneTwo = async (req, res) => {
  const stuf_url = axios.get(
    'https://script.googleusercontent.com/macros/echo?user_content_key=Pz44KbLeK9X4gULuE9Y7tfZufEtQDvWKd_R12bbzA8i6MJEtDzyq3tQq-JZBLWnQOPSyQo0JGaMNJvZmjTDSNLw8H25QnHc1m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKooo5oL873M3V2n_1SHPDX62VuZkHacpZ2U4r5G3_r6Ou16oFv0T08VxJmRJpXbS8eXWXXa1LLnCW41D3qU3DKQy6gW-_Rpeg&lib=MW8rkVqNzYSQZl_gZuXusDUqO0XQ_ydfb'
  );
  const stf_pr_url = axios.get(
    'https://script.google.com/macros/s/AKfycbwO1rAWoKTGpFoQ3iTuMRuuGLtGls69X2gqgUOhON-vPnUH8oNfqS1m5P3ddAErRxb4/exec'
  );

  const carting_pr_url = axios.get(
    'https://script.googleusercontent.com/macros/echo?user_content_key=9ps-rtEIShoLUMcDC1oifcwNfMoSzAu2ZxCNMJk71sLC5uKAdD9OhF9vz0fj7X-opkW6Fv1MfibUjDfl1JoA_rC_c-XPB7bDm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnH0sfn7Co64_k9yoaRKhcZzK2dJ1SJ4mXqhcmgJlxP-27B3glFl51R9rqkFYD5r99xRHaSOVQvfO4kQZmuTEmRyX70tbOYaRIdz9Jw9Md8uu&lib=MIAm_Kgor3BeFH3Gjej52bzWkEKQozq2-'
  );
  const carting_data_set = axios.get(
    'https://script.googleusercontent.com/macros/echo?user_content_key=ao-QYwwq4N4affaXYw_nj8N8yYslm6JM8FAucAhmAqsX3sYkDx0LzYwLQmZO21POzlpDBSX7Xh8bnp_C--XrurPznBCbbYEdm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCupv9ZraWSw0NL9mtvGNfIq4PB0JIeLcCkG1lM_XVeZe5Vmoew7m9C9d-ASkKw0__PVHCrdnglMKKAmZg64u8kqHgwmXBBXWtz9Jw9Md8uu&lib=MIAm_Kgor3BeFH3Gjej52bzWkEKQozq2-'
  );
  axios
    .all([stuf_url, stf_pr_url, carting_pr_url, carting_data_set])
    .then(function (data) {
      const one_two_data_set = data[0];
      const stuff_pr = data[1];
      const projectDetails = data[2];
      const cartingDataSet = data[3];

      res.render('warehouseOneTwo', {
        stuffingReportWarehouseOneTwo: one_two_data_set.data.data,
        stuffingProjectDetailsOne: stuff_pr.data.data,
        cartingProjectDetails: projectDetails.data.data,
        cartingDataSetOneTwo: cartingDataSet.data.data,
        title: 'Warehouse 1-2 Report',
      });
    });
};

exports.warehouseThree = async (req, res) => {
  const stuff_url = axios.get(
    'https://script.googleusercontent.com/macros/echo?user_content_key=qAfwgfrHfVlvuOcPtbDDJbjx_YYvaPttyZNYCHSahdjSQczRr2qFgDFj86n2JHjhS_2-UwyflFRRhuciLTLo-lFIQ3LPZCFPm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnGRBB_UEiI4Dln0fnBFqm76EnHOce_ZDP3yX8Dv7nU_2DVd4Ficzn8kbzh-ikD2p_vQNL2VYtVD5-0TKUMjmvFUmCMgUb9Pau9z9Jw9Md8uu&lib=MzFsmOfzUWvArIz4A7cM7CTWkEKQozq2-'
  );
  const stuff_pr_url = axios.get(
    'https://script.googleusercontent.com/macros/echo?user_content_key=YBiD6qDyLRHAN9qQi_kZeeU7r9cfXRADeuD3MrrpM8RlTU-VWIE4IwbaMkrHv78Na9dhjkI8w2K0bRV_29YQ96YduIp9AQHfm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIys2KwcMpvaW1tDvxIDU5F8xRVvIfvMwKcwpEbkxgqj-U4Tcik2RkCPsWSu1XxTnpEky7NMoliHTARZMXhJX7asnhEVI65Uc9z9Jw9Md8uu&lib=MzFsmOfzUWvArIz4A7cM7CTWkEKQozq2-'
  );
  const carting_pr_url = axios.get(
    'https://script.googleusercontent.com/macros/echo?user_content_key=lS0nz0j7yGT5BJiBhTqKZX43lNAZltOh-iPDQde5cCRAuYBnRrkYR0g5KwWDjJOvyN4wvBrC3BzTJicjIZkbmhWSOBBq6E0Mm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHBjMRiu73KiM0Ck-sqoKJZEBlMK3RlrcQ80zj0ePngtk-K7bJeMBmwLVql_gzH8j75cApUyhvDfYUk6Lgxr2r9zkLsfhVDiVQ&lib=MV7flkd5QHatBU_iSbV45kUqO0XQ_ydfb'
  );
  const carting_url = axios.get(
    'https://script.googleusercontent.com/macros/echo?user_content_key=pDLlNOUXhZ3B5LGUktwDl5GRQeTDovldWgDUGtgrHQWyMTvVYvRnwYHEEILtWLxx1htg16gEZrNXqC-tJ4Bh_s9DM4Jjt68mm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLLTKCXIto1-n2ORA-Vh8tDxRwn3s50_VYDqdgyENjdoax8wR5IIBzu3wA0N5a33KVzrwi6YKv8IYCMqZjoYeGPTowz9C9rokA&lib=MV7flkd5QHatBU_iSbV45kUqO0XQ_ydfb'
  );

  axios
    .all([stuff_url, stuff_pr_url, carting_pr_url, carting_url])
    .then(function (data) {
      const stuffingDataSet = data[0];
      const projectDetails = data[1];
      const cartingProject = data[2];
      const cartingDataSet = data[3];

      res.status(200).render('warehouseThree', {
        title: 'Warehouse Three',
        stuffingReportWarehouseThree: stuffingDataSet.data.data,
        stuffingProjectDetails: projectDetails.data.data,
        cartingProjectDetails: cartingProject.data.data,
        cartingDataSetThree: cartingDataSet.data.data,
      });
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
  const total = await User.find().count();
  const total_active = await User.find({ active: true }).count();
  const total_in_active = await User.find({ active: false }).count();
  console.log(users);
  res.status(200).render('allUsers', {
    users,
    total,
    total_active,
    total_in_active,
    title: 'Users',
  });
};

exports.myHome = (req, res) => {
  res.status(200).render('base', {
    title: 'Home ',
  });
};

exports.generateReport = async (req, res) => {
  let workbook = new exceljs.Workbook();

  const sheet = workbook.addWorksheet('Report');
  var { data } = await axios.get(
    'https://script.googleusercontent.com/macros/echo?user_content_key=FA9QDc1-rjGla7y-rTcgxhpQZhU0uQpf--Vmy9screnV9fde-S9JleLbMAH52bZZE4gWTb9SCz57RM5QvED8uJjmplmUQ6MLm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNfonpGE93rUsBOcaK0IRkO5fg5SKiVPkbAZmc-wjwKVb3hx7kkq4Qcgj5HTizO1fu9U-_d1QR6NTetkGhq6al5Oid3WTkxHSg&lib=MW8rkVqNzYSQZl_gZuXusDUqO0XQ_ydfb'
  );

  sheet.columns = [{ header: 'consolidator' }, { header: 'status' }];
  await data.data.map((value, index) => {
    console.log(value);
    sheet.addRow(value);
  });
  // sheet.addRow([2, 'Mary Sue', 22]);
  // for (var rowItem in data.data) {
  //   sheet.addRow(data.data[rowItem]);
  // }
  res.setHeader(
    'Content-type',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  );

  res.setHeader('Content-Disposition', 'attachment;filename=report.xlsx');

  // data.data.map((file) => {
  //   // console.log(file);
  //   sheet.addRow({ consolidator: 'Damco' });
  // });
  // data.data.map((value, index) => {
  //   console.log(value.consolidator + ' myvalue');
  //   console.log(index + 'idx');
  //   sheet.addRow({
  //     consolidator: value.consolidator,
  //   });
  // });
  workbook.xlsx.write(res);
};
