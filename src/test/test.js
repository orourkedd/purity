const sinon = require('sinon')
const { shallow } = require('enzyme')
const assert = require('assert')

var sandbox

exports.setup = function setup () {
  sandbox = sinon.sandbox.create()

  global.window = {
    addEventListener: sinon.spy(),
    removeEventListener: sinon.spy(),
    scrollTo: sinon.spy(),
    location: {}
  }

  sandbox.stub(global, 'setTimeout')
  sandbox.stub(global, 'clearTimeout')
  sandbox.stub(global, 'setInterval')
  sandbox.stub(global, 'clearInterval')
}

exports.teardown = function teardown () {
  sandbox.restore()

  delete global.window
}

exports.stub = function stub () {
  return sandbox.stub.apply(sandbox, arguments)
}

exports.spy = function spy () {
  return sinon.spy.apply(sandbox, arguments)
}

exports.shallow = shallow

exports.assert = assert
