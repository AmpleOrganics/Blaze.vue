import Select from '@/components/AoSelect.vue'
import { expect } from 'chai'
import Vue from 'vue'

function mountComponent (Component, options) {
  const Constructor = Vue.extend(Component)
  return new Constructor(options).$mount()
}

describe('Select', () => {
  it('defines label prop to be a string', () => {
    const selectLabel = Select.props.label
    expect(selectLabel.type.name).to.equal('String')
    expect(selectLabel.default).to.equal(null)
  })

  it('defines name prop to be a string', () => {
    const selectName = Select.props.name
    expect(selectName.type.name).to.equal('String')
    expect(selectName.default).to.equal(null)
  })

  it('defines iconHtml prop to be a string', () => {
    const iconHtml = Select.props.iconHtml
    expect(iconHtml.type.name).to.equal('String')
    expect(iconHtml.default).to.equal(null)
  })

  it('defines iconClass prop to be a boolean', () => {
    const iconClass = Select.props.iconClass
    expect(iconClass.type.name).to.equal('String')
    expect(iconClass.default).to.equal(null)
  })

  it('defines addOn prop to be a string', () => {
    const addOn = Select.props.addOn
    expect(addOn.type.name).to.equal('String')
    expect(addOn.default).to.equal(null)
  })

  it('defines required prop to be a boolean', () => {
    const required = Select.props.required
    expect(required.type.name).to.equal('Boolean')
    expect(typeof required.default).to.equal('boolean')
    expect(required.default).to.equal(false)
  })

  it('defines hasError prop to be a boolean', () => {
    const hasError = Select.props.hasError
    expect(hasError.type.name).to.equal('Boolean')
    expect(typeof hasError.default).to.equal('boolean')
    expect(hasError.default).to.equal(false)
  })

  it('defines disabled prop to be a boolean', () => {
    const disabled = Select.props.disabled
    expect(disabled.type.name).to.equal('Boolean')
    expect(typeof disabled.default).to.equal('boolean')
    expect(disabled.default).to.equal(false)
  })

  it('defines hasInputGroup as a function', () => {
    expect(typeof Select.computed.hasInputGroup).to.equal('function')
  })

  it('defines hasIconAddon as a function', () => {
    expect(typeof Select.computed.hasIconAddon).to.equal('function')
  })

  it('defines hasAddOn as a function', () => {
    expect(typeof Select.computed.hasAddOn).to.equal('function')
  })

  it('defines default to be valid', () => {
    const stringSelect = mountComponent(Select, {
      propsData: {
        default: 'one',
        options: []
      }
    })
    expect(stringSelect.default).to.equal('one')
    expect(typeof stringSelect.default).to.equal('string')
    const numberSelect = mountComponent(Select, {
      propsData: {
        default: 1,
        options: []
      }
    })
    expect(numberSelect.default).to.equal(1)
    expect(typeof numberSelect.default).to.equal('number')
    const booleanSelect = mountComponent(Select, {
      propsData: {
        default: true,
        options: []
      }
    })
    expect(booleanSelect.default).to.equal(true)
    expect(typeof booleanSelect.default).to.equal('boolean')
  })
})
