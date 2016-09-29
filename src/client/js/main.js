require('babel-polyfill')
const r = require('react').createElement
const { render } = require('react-dom')
const { Provider } = require('react-redux')
const { Router, Route, browserHistory } = require('react-router')
const App = require('./containers/app')
const storeFactory = require('./store/store-factory')
const { pureflow } = require('pureflow')
const { contextPlugin } = require('pureflow/src/plugins/context')
const { payloadPlugin } = require('pureflow/src/plugins/payload')
const { mapPlugin } = require('pureflow/src/plugins/map')
const { runPlugin } = require('pureflow/src/plugins/run')
const { panicPlugin } = require('pureflow/src/plugins/panic')
const { logPlugin } = require('pureflow/src/plugins/log')
const { loadUsers } = require('./pipes/load-users')
const { get } = require('simple-protocol-http')
//  Pull the styles in
require('../scss/main.scss')

let store = storeFactory(window.initialState)

let plugins = {
  context: contextPlugin,
  payload: payloadPlugin,
  map: mapPlugin,
  run: runPlugin,
  log: logPlugin,
  panic: panicPlugin,
  dispatch: (action) => {
    store.dispatch(action)
  },
  get: ({url}) => {
    return get(url).then((result) => {
      return { result }
    })
  }
}

let pipes = {
  loadUsers
}

let actions = pureflow(plugins, pipes)

actions.loadUsers().catch(console.error)

render(
  r(Provider, {store},
    r(Router, {history: browserHistory},
      r(Route, {path: '/', component: App})
    )
  ), document.getElementById('main')
)
