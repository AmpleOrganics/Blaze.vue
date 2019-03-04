import { mount } from '@vue/test-utils'
import Alert from '@/components/AoAlert.vue'

describe('Alert', () => {
  jest.useFakeTimers()

  it('create', () => {
    const alert = mount(Alert, {
      propsData: {
        showAlert: true
      }
    })
    expect(alert.classes()).toContain('ao-alert')
    expect(setTimeout).toHaveBeenCalledTimes(1)
  })

  it('destructive', () => {
    const alert = mount(Alert, {
      propsData: {
        showAlert: true,
        destructive: true
      }
    })
    expect(alert.contains('.ao-alert__icon--destructive')).toBe(true)
  })

  it('caution', () => {
    const alert = mount(Alert, {
      propsData: {
        showAlert: true,
        caution: true
      }
    })

    expect(alert.contains('.ao-alert__icon--caution')).toBe(true)
  })

  it('iconClass', () => {
    const alert = mount(Alert, {
      propsData: {
        showAlert: true,
        iconClass: 'custom-glyph-clients'
      }
    })
    expect(alert.contains('.custom-glyph-clients')).toBe(true)
  })

  it('emit', () => {
    const alert = mount(Alert, {
      propsData: {
        showAlert: true
      }
    })

    jest.runAllTimers()
    expect(alert.emitted()['update:showAlert']).toBeTruthy()
  })

  it('is dismissible', () => {
    const alert = mount(Alert, {
      propsData: {
        showAlert: true
      }
    })
    expect(alert.contains('ao-alert__dismiss'))
    alert.find('.ao-alert__dismiss button').trigger('click')
    expect(alert.emitted()['update:showAlert']).toBeTruthy()
  })
})
