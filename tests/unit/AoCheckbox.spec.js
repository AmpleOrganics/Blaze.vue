import Checkbox from '@/components/AoCheckbox.vue'
import { expect } from 'chai'
import Vue from 'vue'

function mountComponent (Component, options) {
  const Constructor = Vue.extend(Component)
  return new Constructor(options).$mount()
}

describe('Checkbox', () => {
  it('defines checkboxValue prop to be a string', () => {
    const checkboxValue = Checkbox.props.checkboxValue
    expect(checkboxValue.required).to.equal(false)
  })

  it('defines checkboxLabel prop to be a string', () => {
    const checkboxLabel = Checkbox.props.checkboxLabel
    expect(checkboxLabel.type.name).to.equal('String')
    expect(checkboxLabel.default).to.equal(null)
  })

  it('defines name prop to be a string', () => {
    const checkboxName = Checkbox.props.name
    expect(checkboxName.type.name).to.equal('String')
    expect(checkboxName.default).to.equal(null)
  })

  it('defines required prop to be a boolean', () => {
    const required = Checkbox.props.required
    expect(required.type.name).to.equal('Boolean')
    expect(typeof required.default).to.equal('boolean')
    expect(required.default).to.equal(false)
  })

  it('defines disabled prop to be a boolean', () => {
    const disabled = Checkbox.props.disabled
    expect(disabled.type.name).to.equal('Boolean')
    expect(typeof disabled.default).to.equal('boolean')
    expect(disabled.default).to.equal(false)
  })

  it('defines value to be valid', () => {
    const checkbox = mountComponent(Checkbox, {
      propsData: {
        value: true,
        checkboxLabel: 'I am the label for this checkbox'
      }
    })
    expect(checkbox.value).to.equal(true)
    expect(typeof checkbox.value).to.equal('boolean')
  })
})
