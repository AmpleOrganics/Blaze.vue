import AoRadio from '@/components/AoRadio.vue'

function mountComponent (Component, options) {
  const Constructor = Vue.extend(Component)
  return new Constructor(options).$mount()
}

describe('AoRadio', () => {
  it('has String name prop', () => {
    const radioLabel = AoRadio.props.name
    expect(radioLabel.type.name).to.equal('String')
  })

  it('has Boolean disabled prop', () => {
    const disabled = AoRadio.props.disabled
    expect(disabled.type.name).to.equal('Boolean')
    expect(disabled.default).to.equal(false)
  })

  it('has a Boolean required prop', () => {
    const required = AoRadio.props.required
    expect(required.type.name).to.equal('Boolean')
    expect(required.default).to.equal(false)
  })

  it('sets a value as expected', () => {
    const radio = mountComponent(AoRadio, {
      propsData: {
        val: 'Test',
        name: 'test',
        value: 'Test'
      }
    })
    expect(radio.$el.querySelectorAll('input')[0].value).to.equal('Test')
  })
})
