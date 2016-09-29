function loadUsers (users) {
  return {
    type: 'LOAD_USERS',
    payload: users
  }
}

module.exports = {
  loadUsers
}
