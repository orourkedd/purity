const { connect } = require('react-redux')
const { bindActionCreators } = require('redux')
const App = require('../components/app')
const sampleActions = require('../actions/sample')

const { pureflow } = require('pureflow')
const { contextPlugin } = require('pureflow/src/plugins/context')
const { payloadPlugin } = require('pureflow/src/plugins/payload')
const { mapPlugin } = require('pureflow/src/plugins/map')
const { runPlugin } = require('pureflow/src/plugins/run')
const { panicPlugin } = require('pureflow/src/plugins/panic')
const { logPlugin } = require('pureflow/src/plugins/log')
const { loadUsers } = require('../pipes/load-users')
const { get } = require('simple-protocol-http')

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  let plugins = {
    context: contextPlugin,
    payload: payloadPlugin,
    map: mapPlugin,
    run: runPlugin,
    log: logPlugin,
    panic: panicPlugin,
    dispatch: (action) => {
      dispatch(action)
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

  return {
    actions
  }
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
