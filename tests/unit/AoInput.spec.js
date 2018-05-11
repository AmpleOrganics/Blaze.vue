import Input from '@/components/AoInput.vue'
import { expect } from 'chai'
import Vue from 'vue'

function mountComponent (Component, options) {
  const Constructor = Vue.extend(Component)
  return new Constructor(options).$mount()
}

describe('Input', () => {
  it('defines type prop to be a string', () => {
    const inputType = Input.props.type
    expect(inputType.type.name).to.equal('String')
    expect(typeof inputType.default).to.equal('string')
    expect(inputType.default).to.equal('text')
    expect(inputType.required).to.equal(true)
  })

  it('defines label prop to be a string', () => {
    const label = Input.props.label
    expect(label.type.name).to.equal('String')
    expect(label.default).to.equal(null)
    expect(label.required).to.equal(true)
  })

  it('defines name prop to be a string', () => {
    const name = Input.props.name
    expect(name.type.name).to.equal('String')
    expect(name.default).to.equal(null)
  })

  it('defines placeholder prop to be a string', () => {
    const inputPlaceholder = Input.props.placeholder
    expect(inputPlaceholder.type.name).to.equal('String')
    expect(inputPlaceholder.default).to.equal(null)
  })

  it('defines iconHtml prop to be a boolean', () => {
    const iconHtml = Input.props.iconHtml
    expect(iconHtml.type.name).to.equal('String')
    expect(iconHtml.default).to.equal(null)
  })

  it('defines iconClass prop to be a boolean', () => {
    const iconClass = Input.props.iconClass
    expect(iconClass.type.name).to.equal('String')
    expect(iconClass.default).to.equal(null)
  })

  it('defines addOn prop to be a string', () => {
    const addOn = Input.props.addOn
    expect(addOn.type.name).to.equal('String')
    expect(addOn.default).to.equal(null)
  })

  it('defines maxlength prop to be a number', () => {
    const inputMaxlength = Input.props.maxlength
    expect(inputMaxlength.type.name).to.equal('Number')
  })

  it('defines minlength prop to be a number', () => {
    const inputMinlength = Input.props.minlength
    expect(inputMinlength.type.name).to.equal('Number')
  })

  it('defines required prop to be a boolean', () => {
    const required = Input.props.required
    expect(required.type.name).to.equal('Boolean')
    expect(typeof required.default).to.equal('boolean')
    expect(required.default).to.equal(false)
  })

  it('defines readonly prop to be a boolean', () => {
    const readonly = Input.props.readonly
    expect(readonly.type.name).to.equal('Boolean')
    expect(typeof readonly.default).to.equal('boolean')
    expect(readonly.default).to.equal(false)
  })

  it('defines disabled prop to be a boolean', () => {
    const disabled = Input.props.disabled
    expect(disabled.type.name).to.equal('Boolean')
    expect(typeof disabled.default).to.equal('boolean')
    expect(disabled.default).to.equal(false)
  })

  it('defines hasError prop to be a boolean', () => {
    const hasError = Input.props.hasError
    expect(hasError.type.name).to.equal('Boolean')
    expect(typeof hasError.default).to.equal('boolean')
    expect(hasError.default).to.equal(false)
  })

  it('defines showLabel prop to be a boolean', () => {
    const showLabel = Input.props.showLabel
    expect(showLabel.type.name).to.equal('Boolean')
    expect(typeof showLabel.default).to.equal('boolean')
    expect(showLabel.default).to.equal(true)
  })

  it('defines min prop to be a number', () => {
    const min = Input.props.min
    expect(min.type.name).to.equal('Number')
  })

  it('defines max prop to be a number', () => {
    const max = Input.props.max
    expect(max.type.name).to.equal('Number')
  })

  it('defines hasInputGroup as a function', () => {
    expect(typeof Input.computed.hasInputGroup).to.equal('function')
  })

  it('defines hasIconAddon as a function', () => {
    expect(typeof Input.computed.hasIconAddon).to.equal('function')
  })

  it('defines hasAddOn as a function', () => {
    expect(typeof Input.computed.hasAddOn).to.equal('function')
  })

  it('defines text field to be valid', () => {
    const input = mountComponent(Input, {
      propsData: {
        type: 'text',
        label: 'Label',
        maxlength: 20
      }
    })
    expect(input.type).to.equal('text')
    expect(input.$el.querySelector('input').getAttribute('type')).to.equal('text')
    expect(input.$el.querySelector('input').getAttribute('maxlength')).to.equal('20')
  })

  it('defines number field to be valid', () => {
    const input = mountComponent(Input, {
      propsData: {
        type: 'number',
        label: 'Label',
        min: 0,
        max: 10
      }
    })
    expect(input.type).to.equal('number')
    expect(input.$el.querySelector('input').getAttribute('type')).to.equal('number')
    expect(input.$el.querySelector('input').getAttribute('min')).to.equal('0')
    expect(input.$el.querySelector('input').getAttribute('max')).to.equal('10')
  })

  it('defines tel field to be valid', () => {
    const input = mountComponent(Input, {
      propsData: {
        type: 'tel',
        label: 'Label'
      }
    })
    expect(input.type).to.equal('tel')
    expect(input.$el.querySelector('input').getAttribute('type')).to.equal('tel')
  })

  it('defines email field to be valid', () => {
    const input = mountComponent(Input, {
      propsData: {
        type: 'email',
        label: 'Label'
      }
    })
    expect(input.type).to.equal('email')
    expect(input.$el.querySelector('input').getAttribute('type')).to.equal('email')
  })

  it('defines password field to be valid', () => {
    const input = mountComponent(Input, {
      propsData: {
        type: 'password',
        label: 'Label'
      }
    })
    expect(input.type).to.equal('password')
    expect(input.$el.querySelector('input').getAttribute('type')).to.equal('password')
  })

  it('defines search field to be valid', () => {
    const input = mountComponent(Input, {
      propsData: {
        type: 'search',
        label: 'Label'
      }
    })
    expect(input.type).to.equal('search')
    expect(input.$el.querySelector('input').getAttribute('type')).to.equal('search')
  })
})
