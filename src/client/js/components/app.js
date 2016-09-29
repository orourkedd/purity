const React = require('react')
const r = require('react').createElement

module.exports = React.createClass({
  propTypes: {
    actions: React.PropTypes.object.isRequired,
    users: React.PropTypes.object.isRequired
  },

  render () {
    const { loadUsers } = this.props.actions
    const { list } = this.props.users

    let users = list.map((u) => {
      return r('li', {key: u.id}, u.username)
    })

    return (
      r('div', {id: 'app', role: 'main'},
        r('a', {href: 'javascript:;', onClick: loadUsers}, 'Load Users'),
        r('ul', {}, users)
      )
    )
  }
})
