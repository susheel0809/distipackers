console.log('public api');

const get = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'https://script.googleusercontent.com/macros/echo?user_content_key=t6MtSHYcLSA1rYUsgmi15KNAVgNcRWYYoV6Shu5LusJrQN6eIsxtbZH1M1VbV9QfA9QIfvh0o7rGTuyiB1SFQJzCFuWexPxom5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCupv9ZraWSw0NL9mtvGNfIq4PB0JIeLcCkG1lM_XVeZe5Vmoew7m9C9d-ASkKw0__PVHCrdnglMKKAmZg64u8kqHgwmXBBXWtz9Jw9Md8uu&lib=MIAm_Kgor3BeFH3Gjej52bzWkEKQozq2-',
    });

    console.log(res);
  } catch (err) {
    alert('Error logging out try again');
  }
};

module.exports.get = get
