const { assert } = require('test')
const { updateSampleDate } = require('./sample')
const { UPDATE_SAMPLE_DATE } = require('../constants')

describe('Sample action creators', function () {
  describe('updateSampleDate', function () {
    it('should return an action with correct action type', function () {
      let action = updateSampleDate()
      assert.equal(action.type, UPDATE_SAMPLE_DATE, 'action did not have type of UPDATE_SAMPLE_DATE')
    })
  })
})
