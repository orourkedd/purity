const { loadUsers } = require('../actions/users')

function l1 () {
  return {
    get: {
      url: '/api/v1/users'
    }
  }
}

function l2 ({result}) {
  if (result.success) {
    return {
      payload: result.payload
    }
  } else {
    return {
      panic: result.error
    }
  }
}

function l3 ({payload}) {
  return {
    dispatch: loadUsers(payload)
  }
}

module.exports = {
  loadUsers: [l1, l2, l3]
}
