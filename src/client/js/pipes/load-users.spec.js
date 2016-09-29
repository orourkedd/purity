const { loadUsers } = require('./load-users')
const deep = require('assert').deepEqual

describe('loadUsers', () => {
  describe('l1', () => {
    it('should return get config data', () => {
      deep(loadUsers[0](), {
        get: {
          url: '/api/v1/users'
        }
      })
    })
  })

  describe('l2', () => {
    it('should set the payload if result.success is true', () => {
      let payload = [{id: 1}, {id: 2}]
      let protocol = {
        result: {
          success: true,
          payload
        }
      }

      let result = loadUsers[1](protocol)
      deep(result, {
        payload
      })
    })

    it('should error out if result.success is false', () => {
      let error = new Error('oops!')
      let protocol = {
        result: {
          success: false,
          error
        }
      }

      let result = loadUsers[1](protocol)
      deep(result, {
        panic: error
      })
    })
  })

  describe('l3', () => {
    it('should dispatch action with payload', () => {
      let payload = [{id: 1}, {id: 2}]
      let protocol = {
        payload
      }
      let result = loadUsers[2](protocol)
      deep(result, {
        dispatch: {
          type: 'LOAD_USERS',
          payload
        }
      })
    })
  })
})
