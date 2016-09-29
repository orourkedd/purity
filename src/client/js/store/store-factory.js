const { createStore, compose } = require('redux')
const reducers = require('../reducers')

const composeStoreWithMiddleware = compose(
  window.devToolsExtension && process.env.NODE_ENV === 'development' ? window.devToolsExtension() : f => f
)(createStore)

module.exports = function (state) {
  return composeStoreWithMiddleware(reducers, state)
}
