console.log('I am logout');
document.querySelector('.nav__el--logout').addEventListener('click', (e) => {
  e.preventDefault();
  document.addEventListener('click', logout);
});

const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:8000/api/v1/users/logout',
    });
    // if (res.data.status == 'success') location.reload(true);

    if (res.data.status == 'success') {
      alert('Logged out');
      window.setTimeout(() => {
        location.assign('/');
      }, 100);
    }
  } catch (err) {
    alert('Error logging out try again');
  }
};
