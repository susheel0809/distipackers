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

exports.warehouseOneTwo = async (req, res) => {
  //stuffing data set
  const stuf_url = axios.get(
    'https://script.googleusercontent.com/macros/echo?user_content_key=a-egOCZPeCtvI9wkQIdqErJ9xyEzIYChfcE9gXDVHx0dyXNkSYg5J6wYxsgNTatI5i4727RiosCssWh_yHFowc9kcSacnBP-m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKtqdu1DjehCO21enFFo77oQOGCgW60nTxWhBDMBMnkQJhSDzWMc82GA7pnh-twY6ryk_TwFpw0BrJU8HpRUu2R0cbD2OFhOJw&lib=MW8rkVqNzYSQZl_gZuXusDUqO0XQ_ydfb'
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
    'https://script.googleusercontent.com/macros/echo?user_content_key=OuhFruR-wGMqQpyNaekYCkOtdf5j2Z8oOSK4mT0yqbkFmRlzThToCzipq19LMaCE8Io8FXbmy0dNbx8-C8oLkcDbIlucTFlWm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEYifV1R3qAM2QoJuPEgC6csafXatiL2tzoYe858tN9fBhpU_jXwZi850tKxnEefgMOc3ZO_UPEGNOU8vwVlUOex90-N9aL0A9z9Jw9Md8uu&lib=MIAm_Kgor3BeFH3Gjej52bzWkEKQozq2-'
  );

  //stuffing combo chart
  const chart_s_url = axios.get(
    'https://script.googleusercontent.com/macros/echo?user_content_key=rZgZxqJ9yWM8JaQzIIZrZ0CTMKhZeUlYSRNcNaYl9UwO5SR_9YZrALuXu7ofRAfZdxD-YFKZBGvIKfx2Y7NFatPjn1EHw5dqm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJhwRyY_ZR_zI5FUDcDpI6prvkrm7GsWDWc2N6d4KWxakDkqM_-7SAGiKZSADfTSHiGeMMWo6JP_5RB3SDeYJEjn_l8kTkcQzg&lib=MW8rkVqNzYSQZl_gZuXusDUqO0XQ_ydfb'
  );

  //carting combo chart
  const carting_chart_url = axios.get(
    'https://script.googleusercontent.com/macros/echo?user_content_key=_Cq3j0YgUZyBUXk7NWwekmGUdR6F2hg2Svn2U5ZlKzxNYccwp1egZQLn5GC837Dhil_kgKFMJnpU0Yibx6tKMWFJqGLhqMgWm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPXve1yOI7-V3lOmSMucJR-7U4wHepKsIUOJM5Zy-XwqGS_yAfv2rMA9_tH0NYerpI5ZcGTiYQtqwDPM6Ew1cDMqVEfK_CWZT9z9Jw9Md8uu&lib=MIAm_Kgor3BeFH3Gjej52bzWkEKQozq2-'
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

      res.render('warehouseOneTwo', {
        stuffingReportWarehouseOneTwo: one_two_data_set.data.data,
        stuffingProjectDetailsOne: stuff_pr.data.data,
        cartingProjectDetails: projectDetails.data.data,
        cartingDataSetOneTwo: cartingDataSet.data.data,
        stuffingChartOneTwo: JSON.stringify(stuff_chart.data.data),
        cartingChartOneTwo: JSON.stringify(carting_chart.data.data),
        title: 'Warehouse 1-2 Report',
      });
    });
};

exports.warehouseThree = async (req, res) => {
  // res.
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
  const stuff_chart_url = axios.get(
    'https://script.googleusercontent.com/macros/echo?user_content_key=xeM3rOZvYfajjNTz_WfcBcM5_uWDJf3NQulD2j7XOl2cKhgp1-qM6JwtRZr-ktIE9sYely8JQttbjkg6PeiFUDJIbsJF-S58m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnL2AT9By8fF5Dkb6OdPOVvMcWZPl1DNIFS6k6l42J7HwpzFNRxC4xQD0yrrGDR9-yUv4gUcOsRySJnyCItLTmcYYGecESd1aB9z9Jw9Md8uu&lib=MzFsmOfzUWvArIz4A7cM7CTWkEKQozq2-'
  );

  const carting_chart_url = axios.get(
    'https://script.googleusercontent.com/macros/echo?user_content_key=-O4cGL2DRNtE45mXGuRCjNSzXZDrKOGVW6KCyg9X_wYwuS1D6doNZZKkmtkdQYWN1CsY-9hPwjw_wiMZFcS6yKU2p-v7aIPSm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHvoCcOboXKdiWu2DQ1Yyn4SfLVKf4cn2t39hvuAsXpDSBq788eMGRL8NM5nSq01M7yySfga8BbJ_TghSbWodhuuwjhMb0MiNQ&lib=MV7flkd5QHatBU_iSbV45kUqO0XQ_ydfb'
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
      console.log(stuff_chart.data + 'data chart ');

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
