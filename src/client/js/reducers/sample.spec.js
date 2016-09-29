const { assert } = require('test')
const { updateSampleDate } = require('../actions/sample')
const reducer = require('./sample')

describe('Sample reducer', function () {
  describe('receiving action type UPDATE_SAMPLE_DATE', function () {
    it('should return a new state with an updated date', function () {
      let action = updateSampleDate()

      //  update date manually for test
      action.date = new Date()
      let state = {}
      let newState = reducer(state, action)

      assert.equal(newState.date, action.date, 'date was not updated.')
      assert(state !== newState, 'Same state was returned.')
    })
  })

  it('should return state by default', function () {
    let state = {}
    let newState = reducer(state, {})
    assert(state === newState, 'State was changed in the reducer.')
  })
})
