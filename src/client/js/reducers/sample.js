const { UPDATE_SAMPLE_DATE } = require('../constants')

let initialState = {
  title: 'Hello',
  date: new Date()
}

module.exports = function sample (state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_SAMPLE_DATE:
      return Object.assign({}, state, {
        date: action.date
      })

    default:
      return state
  }
}
