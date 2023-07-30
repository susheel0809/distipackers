const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:4000/api/v1/users/login',
      data: {
        email,
        password,
      },
    });

    if (res.data.status == 'success') {
      alert('Logged in Succesfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
    console.log(res.data);
  } catch (err) {
    alert(err.response.data.message);
  }
};

console.log('It is working ');

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  // console.log(email);
  // console.log('called');
  login(email, password);
});
