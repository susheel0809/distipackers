console.log('I am logout');
document.querySelector('.nav__el--logout').addEventListener('click', (e) => {
  e.preventDefault();
  document.addEventListener('click', logout);
});

const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:4000/api/v1/users/logout',
    });
    if (res.data.status == 'success') location.reload(true);
  } catch (err) {
    alert('Error logging out try again');
  }
};
