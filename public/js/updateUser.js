const updateUser = async (id, active) => {
  alert(active);
  try {
    const res = await axios({
      method: 'PATCH',
      url: `http://127.0.0.1:8000/api/v1/users/${id}`,
      data: {
        active,
      },
    });

    if (res.data.status == 'success') {
      alert('User Updated');
      window.setTimeout(() => {
        location.assign('/users');
      }, 100);
    }
    console.log(res.data);
  } catch (err) {
    console.log(err);
    alert(err.response.data.message);
  }
};

document.querySelector('.form').addEventListener('submit', (e) => {
  //   confirm('Do you want to update the user');
  e.preventDefault();

  const id = document.getElementById('id').value;
  const active = document.getElementById('active').value;
  updateUser(id, active);
});
