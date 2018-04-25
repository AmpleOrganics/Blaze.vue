import Alert from '@/components/AoAlert.vue'
import { expect } from 'chai'
import Vue from 'vue'

function mountComponent (Component, options) {
  const Constructor = Vue.extend(Component)
  return new Constructor(options).$mount()
}
describe('Alert', () => {
  it('defines showAlert prop', () => {
    const alertShowAlert = Alert.props.showAlert
    expect(alertShowAlert.type.name).to.equal('Boolean')
    expect(typeof alertShowAlert.default).to.equal('boolean')
    expect(alertShowAlert.default).to.equal(false)
    expect(alertShowAlert.required).to.equal(true)
  })

  it('defines destructive prop to be a boolean and to default to false', () => {
    const destructive = Alert.props.destructive
    expect(destructive.type.name).to.equal('Boolean')
    expect(typeof destructive.default).to.equal('boolean')
    expect(destructive.default).to.equal(false)
  })

  it('defines caution prop to be a boolean and to default to false', () => {
    const caution = Alert.props.caution
    expect(caution.type.name).to.equal('Boolean')
    expect(typeof caution.default).to.equal('boolean')
    expect(caution.default).to.equal(false)
  })

  it('defines computedAlertIconClass as a function', () => {
    expect(typeof Alert.computed.computedAlertIconClass).to.equal('function')
  })

  it('returns only default values on creation', () => {
    const alert = mountComponent(Alert, {
      propsData: {
        showAlert: false
      }
    })
    expect(alert.showAlert).to.equal(false)
    expect(alert.computedAlertIconClass.join(' ')).to.equal('ao-alert__icon ao-alert__icon--default')
  })

  it('returns destructive props on creation', () => {
    const alert = mountComponent(Alert, {
      propsData: {
        showAlert: true,
        destructive: true
      }
    })
    expect(alert.showAlert).to.equal(true)
    expect(alert.destructive).to.equal(true)
    expect(alert.computedAlertIconClass
      .join(' '))
      .to.equal('ao-alert__icon ao-alert__icon--default ao-alert__icon--destructive')
  })

  it('returns caution props on creation', () => {
    const alert = mountComponent(Alert, {
      propsData: {
        showAlert: true,
        caution: true
      }
    })
    expect(alert.showAlert).to.equal(true)
    expect(alert.caution).to.equal(true)
    expect(alert.computedAlertIconClass
      .join(' '))
      .to.equal('ao-alert__icon ao-alert__icon--default ao-alert__icon--caution')
  })
})
