require('babel-polyfill')
const r = require('react').createElement
const { render } = require('react-dom')
const { Provider } = require('react-redux')
const { Router, Route, browserHistory } = require('react-router')
const App = require('./containers/app')
const storeFactory = require('./store/store-factory')
//  Pull the styles in
require('../scss/main.scss')

let store = storeFactory(window.initialState)

render(
  r(Provider, {store},
    r(Router, {history: browserHistory},
      r(Route, {path: '/', component: App})
    )
  ), document.getElementById('main')
)
