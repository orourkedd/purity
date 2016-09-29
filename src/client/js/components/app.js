const React = require('react')
const r = require('react').createElement

module.exports = React.createClass({
  propTypes: {
    actions: React.PropTypes.object.isRequired,
    sample: React.PropTypes.object.isRequired
  },

  getDefaultProps () {
    return {
      sample: {
        title: 'Default Title',
        date: new Date(Date.now())
      }
    }
  },

  updateDate (e) {
    if (e) {
      e.preventDefault()
    }

    let { updateSampleDate } = this.props.actions
    updateSampleDate()
  },

  render () {
    const { title, date } = this.props.sample

    return (
      r('div', {id: 'app', role: 'main'},
        r('h1', {}, `${title} : ${date.getTime()}`),
        r('a', {href: 'javascript:;', onClick: this.updateDate}, 'Update Timestamp')
      )
    )
  }
})
