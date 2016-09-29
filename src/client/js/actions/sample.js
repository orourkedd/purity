const { UPDATE_SAMPLE_DATE } = require('../constants')

exports.updateSampleDate = function updateSampleDate () {
  return {
    type: UPDATE_SAMPLE_DATE,
    date: new Date()
  }
}
