const { assert, shallow, spy } = require('test')
const App = require('./app')
const r = require('react').createElement

describe('<App />', () => {
  it('renders an h1 with timestamp', () => {
    let sampleProps = {
      title: 'Hello',
      date: new Date()
    }

    const wrapper = shallow(r(App, {sample: sampleProps, actions: {}}))

    let h1 = wrapper.find('h1')
    assert.equal(h1.text(), sampleProps.title + ' : ' + sampleProps.date.getTime())
  })

  it('should call actions.updateSampleDate when link is clicked', () => {
    let actions = {
      updateSampleDate: spy()
    }
    const wrapper = shallow(r(App, {actions}))
    wrapper.find('a').simulate('click')
    assert(actions.updateSampleDate.calledOnce, 'actions.updateSampleDate was not called once')
  })
})
