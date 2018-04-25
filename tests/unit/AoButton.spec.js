import Button from '@/components/AoButton.vue'
import { expect } from 'chai'
import Vue from 'vue'

function mountComponent (Component, options) {
  const Constructor = Vue.extend(Component)
  return new Constructor(options).$mount()
}

describe('Button', () => {
  it('defines type prop to be valid and to default to button', () => {
    const buttonType = Button.props.type
    expect(buttonType.type.name).to.equal('String')
    expect(typeof buttonType.default).to.equal('string')
    expect(buttonType.default).to.equal('button')
    expect(buttonType.required).to.equal(false)
  })

  it('defines primary prop to be a boolean and to default to false', () => {
    const primary = Button.props.primary
    expect(primary.type.name).to.equal('Boolean')
    expect(typeof primary.default).to.equal('boolean')
    expect(primary.default).to.equal(false)
  })

  it('defines destructive prop to be a boolean and to default to false', () => {
    const destructive = Button.props.destructive
    expect(destructive.type.name).to.equal('Boolean')
    expect(typeof destructive.default).to.equal('boolean')
    expect(destructive.default).to.equal(false)
  })

  it('defines caution prop to be a boolean and to default to false', () => {
    const caution = Button.props.caution
    expect(caution.type.name).to.equal('Boolean')
    expect(typeof caution.default).to.equal('boolean')
    expect(caution.default).to.equal(false)
  })

  it('defines subtle prop to be a boolean and to default to false', () => {
    const subtle = Button.props.subtle
    expect(subtle.type.name).to.equal('Boolean')
    expect(typeof subtle.default).to.equal('boolean')
    expect(subtle.default).to.equal(false)
  })

  it('defines disabled prop to be a boolean and to default to false', () => {
    const disabled = Button.props.disabled
    expect(disabled.type.name).to.equal('Boolean')
    expect(typeof disabled.default).to.equal('boolean')
    expect(disabled.default).to.equal(false)
  })

  it('defines computedButtonClass as a function', () => {
    expect(typeof Button.computed.computedButtonClass).to.equal('function')
  })

  it('returns only default values on creation', () => {
    const button = mountComponent(Button, {
      propsData: {
        type: 'button'
      }
    })
    expect(button.type).to.equal('button')
    expect(button.primary).to.equal(false)
    expect(button.destructive).to.equal(false)
    expect(button.caution).to.equal(false)
    expect(button.subtle).to.equal(false)
    expect(button.disabled).to.equal(false)
    expect(button.computedButtonClass.join(' ')).to.equal('ao-button')
  })

  it('returns primary props on creation', () => {
    const button = mountComponent(Button, {
      propsData: {
        type: 'button',
        primary: true
      }
    })
    expect(button.type).to.equal('button')
    expect(button.primary).to.equal(true)
    expect(button.destructive).to.equal(false)
    expect(button.caution).to.equal(false)
    expect(button.subtle).to.equal(false)
    expect(button.disabled).to.equal(false)
    expect(button.computedButtonClass
      .join(' '))
      .to.equal('ao-button ao-button--primary')
  })

  it('returns destructive props on creation and disabled', () => {
    const button = mountComponent(Button, {
      propsData: {
        type: 'button',
        destructive: true,
        disabled: true
      }
    })
    expect(button.type).to.equal('button')
    expect(button.primary).to.equal(false)
    expect(button.destructive).to.equal(true)
    expect(button.caution).to.equal(false)
    expect(button.subtle).to.equal(false)
    expect(button.disabled).to.equal(true)
    expect(button.computedButtonClass
      .join(' '))
      .to.equal('ao-button ao-button--destructive')
  })

  it('returns caution props on creation', () => {
    const button = mountComponent(Button, {
      propsData: {
        type: 'button',
        caution: true
      }
    })
    expect(button.type).to.equal('button')
    expect(button.primary).to.equal(false)
    expect(button.destructive).to.equal(false)
    expect(button.caution).to.equal(true)
    expect(button.subtle).to.equal(false)
    expect(button.disabled).to.equal(false)
    expect(button.computedButtonClass
      .join(' '))
      .to.equal('ao-button ao-button--caution')
  })

  it('returns subtle props on creation', () => {
    const button = mountComponent(Button, {
      propsData: {
        type: 'button',
        subtle: true
      }
    })
    expect(button.type).to.equal('button')
    expect(button.primary).to.equal(false)
    expect(button.destructive).to.equal(false)
    expect(button.caution).to.equal(false)
    expect(button.subtle).to.equal(true)
    expect(button.disabled).to.equal(false)
    expect(button.computedButtonClass
      .join(' '))
      .to.equal('ao-button ao-button--subtle')
  })
})
