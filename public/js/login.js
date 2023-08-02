const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/login',
      data: {
        email,
        password,
      },
    });

    if (res.data.status == 'success') {
      alert('Logged in Succesfully');
      window.setTimeout(() => {
        location.assign('/home');
      }, 100);
    }
    console.log(res.data);
  } catch (err) {
    console.log(err);
    alert(err.response.data.message);
  }
};

console.log('It is working ');

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('login').value;
  const password = document.getElementById('password').value;
  // console.log(email);
  // console.log('called');
  login(email, password);
});
