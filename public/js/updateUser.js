const updateUser = async (id, active) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: `/api/v1/users/${id}`,
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

// document.querySelector('.form').ad (e) => {
//   //   confirm('Do you want to update the user');
//   e.preventDefault();

//   const id = document.getElementById('id').value;
//   const active = document.getElementById('active').value;
//   updateUser(id, active);
// });

function updateActive(id, active) {
  if (active) {
    const result = confirm('Are you sure you want to activate the user');
    if (result) {
      updateUser(id, active);
    }
  } else {
    const result = confirm('Are you sure you want to De Activate the user');
    if (result) {
      updateUser(id, active);
    }
  }
}
