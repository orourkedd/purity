const { combineReducers } = require('redux')
const sample = require('./sample')
const users = require('./users')

const rootReducer = combineReducers({
  sample,
  users
})

module.exports = rootReducer
