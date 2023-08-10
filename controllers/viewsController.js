const { default: axios } = require('axios');
const User = require('../models/userModel');
const exceljs = require('exceljs');
// const { Route } = require('express');
const sendEmail = require('./../utils/email');

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
  const start_date = req.params.start_date;
  const end_date = req.params.end_date;

  // console.log(start_date, ' start date');
  // console.log(end_date, ' end date');

  //stuffing data set
  const stuf_url = axios.get(
    `https://script.google.com/macros/s/AKfycbx30t5HxE1OP6y-r4dbqdXlekSxfuawnJxeLE0zbQwCncq1Vm_fqVXMLI0gMpDDIF2p/exec?start_date=${start_date}&end_date=${end_date}`
  );

  //stuffing project details
  const stf_pr_url = axios.get(
    'https://script.google.com/macros/s/AKfycbwO1rAWoKTGpFoQ3iTuMRuuGLtGls69X2gqgUOhON-vPnUH8oNfqS1m5P3ddAErRxb4/exec'
  );

  //carting project details
  const carting_pr_url = axios.get(
    'https://script.googleusercontent.com/macros/echo?user_content_key=9ps-rtEIShoLUMcDC1oifcwNfMoSzAu2ZxCNMJk71sLC5uKAdD9OhF9vz0fj7X-opkW6Fv1MfibUjDfl1JoA_rC_c-XPB7bDm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnH0sfn7Co64_k9yoaRKhcZzK2dJ1SJ4mXqhcmgJlxP-27B3glFl51R9rqkFYD5r99xRHaSOVQvfO4kQZmuTEmRyX70tbOYaRIdz9Jw9Md8uu&lib=MIAm_Kgor3BeFH3Gjej52bzWkEKQozq2-'
  );

  // carting data set
  const carting_data_set = axios.get(
    `https://script.google.com/macros/s/AKfycby7xloBRXBCakpg1UHrbgMlaxyttd-duYdiqk2fyEOcijlv3xD0Usp0s2bQE9ql_eQ_uQ/exec?start_date=${start_date}&end_date=${end_date}`
  );

  //stuffing combo chart
  const chart_s_url = axios.get(
    `https://script.google.com/macros/s/AKfycbyXS9cGbuEccBWN7bC3G8DEmxUINarqwJofaB2iPfe5M5ooOCcbHwyoeH4KlbeNm5oQ/exec?start_date=${start_date}&end_date=${end_date}`
  );

  //carting combo chart
  const carting_chart_url = axios.get(
    `https://script.google.com/macros/s/AKfycbz-Wzod1zdRnjFro28xCTA2VXbLnOwPNjsGQ-NS83GzuOaVBp3tdlQ62APG-82xvXfBaw/exec?start_date=${start_date}&end_date=${end_date}`
  );
  axios
    .all([
      stuf_url,
      stf_pr_url,
      carting_pr_url,
      carting_data_set,
      chart_s_url,
      carting_chart_url,
    ])
    .then(function (data) {
      const one_two_data_set = data[0];
      const stuff_pr = data[1];
      const projectDetails = data[2];
      const cartingDataSet = data[3];
      const stuff_chart = data[4];
      const carting_chart = data[5];
      console.log(one_two_data_set.data.data);

      res.render('warehouseOneTwo', {
        stuffingReportWarehouseOneTwo: one_two_data_set.data.data,
        stuffingProjectDetailsOne: stuff_pr.data.data,
        cartingProjectDetails: projectDetails.data.data,
        cartingDataSetOneTwo: cartingDataSet.data.data,
        stuffingChartOneTwo: JSON.stringify(stuff_chart.data.data),
        cartingChartOneTwo: JSON.stringify(carting_chart.data.data),
        isLoaded: true,
        title: 'Warehouse 1-2 Report',
      });
    });
};

exports.warehouseThree = async (req, res) => {
  const start_date = req.params.start_date;
  const end_date = req.params.end_date;

  //stuffing data set
  const stuff_url = axios.get(
    `https://script.google.com/macros/s/AKfycbwNhSud2iE9-aL-SownkMO6gdZKHdi0bFYPBBRhiHOwtuSjIttxaoXnIouKudcDdfCmpg/exec?start_date=${start_date}&end_date=${end_date}`
  );
  const stuff_pr_url = axios.get(
    'https://script.googleusercontent.com/macros/echo?user_content_key=YBiD6qDyLRHAN9qQi_kZeeU7r9cfXRADeuD3MrrpM8RlTU-VWIE4IwbaMkrHv78Na9dhjkI8w2K0bRV_29YQ96YduIp9AQHfm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIys2KwcMpvaW1tDvxIDU5F8xRVvIfvMwKcwpEbkxgqj-U4Tcik2RkCPsWSu1XxTnpEky7NMoliHTARZMXhJX7asnhEVI65Uc9z9Jw9Md8uu&lib=MzFsmOfzUWvArIz4A7cM7CTWkEKQozq2-'
  );
  const carting_pr_url = axios.get(
    'https://script.googleusercontent.com/macros/echo?user_content_key=lS0nz0j7yGT5BJiBhTqKZX43lNAZltOh-iPDQde5cCRAuYBnRrkYR0g5KwWDjJOvyN4wvBrC3BzTJicjIZkbmhWSOBBq6E0Mm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHBjMRiu73KiM0Ck-sqoKJZEBlMK3RlrcQ80zj0ePngtk-K7bJeMBmwLVql_gzH8j75cApUyhvDfYUk6Lgxr2r9zkLsfhVDiVQ&lib=MV7flkd5QHatBU_iSbV45kUqO0XQ_ydfb'
  );
  const carting_url = axios.get(
    `https://script.google.com/macros/s/AKfycbx09idfdoueiKlUhoqpT8ZzdNfsYtqdfv2qSIQJZoSXO500LjjGi0KFnV4Heo_UJv4d/exec?start_date=${start_date}&end_date=${end_date}`
  );
  const stuff_chart_url = axios.get(
    `https://script.google.com/macros/s/AKfycbzp6clHsiJ_0Y6X8G13t1uqKhSwmnANt0I_V6ThVNI7kEK_Z2zPtc4Mo_pZew7UFgIHVg/exec?start_date=${start_date}&end_date=${end_date}`
  );

  const carting_chart_url = axios.get(
    `https://script.google.com/macros/s/AKfycbyM_goQc1MMWK87-VlXFeI1zIBt4F9GqJsfIDjr8y8XX38oEiyXrJF2V8g5ji3mxk_P/exec?start_date=${start_date}&end_date=${end_date}`
  );
  axios
    .all([
      stuff_url,
      stuff_pr_url,
      carting_pr_url,
      carting_url,
      stuff_chart_url,
      carting_chart_url,
    ])
    .then(function (data) {
      const stuffingDataSet = data[0];
      const projectDetails = data[1];
      const cartingProject = data[2];
      const cartingDataSet = data[3];
      const stuff_chart = data[4];
      const carting_chart = data[5];
      // console.log(stuff_chart.data.data + 'data chart ');

      res.status(200).render('warehouseThree', {
        title: 'Warehouse Three',
        stuffingReportWarehouseThree: stuffingDataSet.data.data,
        stuffingProjectDetails: projectDetails.data.data,
        cartingProjectDetails: cartingProject.data.data,
        cartingDataSetThree: cartingDataSet.data.data,
        stuffingChartThree: JSON.stringify(stuff_chart.data.data),
        cartingChartThree: JSON.stringify(carting_chart.data.data),
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

exports.getLoader = (req, res) => {
  res.status(200).render('loader', {
    title: 'loader',
  });
};
