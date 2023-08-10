document.querySelector('.filterForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const start = document.getElementById('start').value;
  const end = document.getElementById('end').value;

  const sdate = new Date(start);
  let sday = sdate.getDate();
  if (sday < 10) sday = '0' + sday;
  let smonth = sdate.getMonth() + 1; // Months are zero-based
  if (smonth < 10) smonth = '0' + smonth;
  const syear = sdate.getFullYear();

  const edate = new Date(end);
  let eday = edate.getDate();
  if (eday < 10) eday = '0' + eday;
  let emonth = edate.getMonth() + 1; // Months are zero-based
  if (emonth < 10) emonth = '0' + emonth;
  const eyear = edate.getFullYear();

  let f_sdate = sday + '-' + smonth + '-' + syear;
  let f_edate = eday + '-' + emonth + '-' + eyear;

  // console.log(f_sdate);
  // console.log(f_edate);

  if (f_sdate == 'NaN-NaN-NaN' || f_edate == 'NaN-NaN-NaN') {
    const today = new Date();
    let tday = today.getDate();
    if (tday < 10) tday = '0' + tday;
    let tmonth = today.getMonth() + 1; // Months are zero-based
    // if (tmonth < 10) tmonth = '0' + tmonth;
    const tyear = today.getFullYear();
    f_sdate = tday + '-' + tmonth + '-' + tyear;
    f_edate = tday + '-' + tmonth + '-' + tyear;
    console.log(f_sdate);
    console.log(f_edate);
  }
  if (f_sdate <= f_edate) {
    filetData(f_sdate, f_edate);
  } else {
    alert('Start Date should be less than from end date');
  }
});

const filetData = async (start, end) => {
  window.setTimeout(() => {
    location.assign(`/warehouse_three/${start}/${end}`);
  }, 0);
};
