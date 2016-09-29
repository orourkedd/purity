const { merge } = require('ramda')
let initialState = {
  list: []
}

module.exports = function users (state = initialState, action = {}) {
  console.log(action)
  switch (action.type) {
    case 'LOAD_USERS':
      console.log('LOAD_USERS', action)
      return merge(state, {
        list: action.payload
      })

    default:
      return state
  }
}
