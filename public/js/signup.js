const login = async (name, email, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm,
      },
    });

    if (res.data.status == 'Success') {
      alert(
        'Registered Succesfully. Your registration needs to be approved we will inform you via email'
      );
      window.setTimeout(() => {
        location.assign('/');
      }, 100);
    }
    console.log(res.data);
  } catch (err) {
    console.log(err);
    alert(err.response.data.message);
  }
};

console.log('It is working Signup');

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const passwordConfirm = document.getElementById('passwordConfirm').value;
  login(name, email, password, passwordConfirm);
});
