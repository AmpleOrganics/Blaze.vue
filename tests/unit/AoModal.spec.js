import Modal from '@/components/AoModal.vue'
import { expect } from 'chai'
import Vue from 'vue'

function mountComponent (component, options) {
  const Constructor = Vue.extend(component)
  return new Constructor(options).$mount()
}

describe('Modal', () => {
  it('defines destructive prop to be a boolean and to be false by default', () => {
    const destructive = Modal.props.destructive
    expect(destructive.type.name).to.equal('Boolean')
    expect(typeof destructive.default).to.equal('boolean')
    expect(destructive.default).to.equal(false)
  })

  it('defines caution prop to be a boolean and to be false by default', () => {
    const caution = Modal.props.caution
    expect(caution.type.name).to.equal('Boolean')
    expect(typeof caution.default).to.equal('boolean')
    expect(caution.default).to.equal(false)
  })

  it('defines computedHeaderClass as a function', () => {
    expect(typeof Modal.computed.computedHeaderClass).to.equal('function')
  })

  it('defines computedModalSize as a function', () => {
    expect(typeof Modal.computed.computedModalSize).to.equal('function')
  })

  it('defines closeModal as a function', () => {
    expect(typeof Modal.methods.closeModal).to.equal('function')
  })

  it('returns only default values on creation', () => {
    const modal = mountComponent(Modal, {
      propsData: {
        size: 'md'
      }
    })

    expect(modal.size).to.equal('md')
    expect(modal.destructive).to.equal(false)
    expect(modal.caution).to.equal(false)
    expect(modal.computedHeaderClass.join(' ')).to.equal('ao-modal__header')
    expect(modal.computedModalSize).to.equal('ao-modal--md')
  })

  it('creates a destructive Modal', () => {
    const modal = mountComponent(Modal, {
      propsData: {
        size: 'md',
        destructive: true
      }
    })

    expect(modal.size).to.equal('md')
    expect(modal.destructive).to.equal(true)
    expect(modal.caution).to.equal(false)
    expect(modal.computedHeaderClass.join(' '))
      .to
      .equal('ao-modal__header ao-modal__header--destructive')
    expect(modal.computedModalSize).to.equal('ao-modal--md')
  })

  it('creates a caution Modal', () => {
    const modal = mountComponent(Modal, {
      propsData: {
        size: 'md',
        caution: true
      }
    })
    expect(modal.size).to.equal('md')
    expect(modal.destructive).to.equal(false)
    expect(modal.caution).to.equal(true)
    expect(modal.computedHeaderClass.join(' '))
      .to
      .equal('ao-modal__header ao-modal__header--caution')
    expect(modal.computedModalSize).to.equal('ao-modal--md')
  })
})
