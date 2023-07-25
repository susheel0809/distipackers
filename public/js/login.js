const login = async (email, password) => {
  console.log(email, password);

  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:4000/api/v1/users/login',
      data: {
        email,
        password,
      },
    });
    console.log(res.data);
  } catch (err) {
    console.log(err.response.data);
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
