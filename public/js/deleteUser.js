const deleteUser = async (id) => {
  try {
    const res = await axios({
      method: 'DELETE',
      url: `/api/v1/users/${id}`,
    });

    if (res.data.status == 'success') {
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

function delteeUserById(id) {
  const result = confirm('Are you sure you want to Delete the user');
  if (result) {
    deleteUser(id);
  }
}
