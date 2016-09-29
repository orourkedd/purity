const { connect } = require('react-redux')
const { bindActionCreators } = require('redux')
const App = require('../components/app')
const sampleActions = require('../actions/sample')

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(sampleActions, dispatch)
  }
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
