const { combineReducers } = require('redux')
const sample = require('./sample')

const rootReducer = combineReducers({
  sample
})

module.exports = rootReducer
