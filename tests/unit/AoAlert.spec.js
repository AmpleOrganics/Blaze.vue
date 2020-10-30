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
    expect(alert.find('.ao-alert').exists()).toBe(true)
    expect(setTimeout).toHaveBeenCalledTimes(1)
  })

  it('destructive', () => {
    const alert = mount(Alert, {
      propsData: {
        showAlert: true,
        destructive: true
      }
    })
    expect(alert.find('.ao-alert__icon--destructive').exists()).toBe(true)
  })

  it('caution', () => {
    const alert = mount(Alert, {
      propsData: {
        showAlert: true,
        caution: true
      }
    })

    expect(alert.find('.ao-alert__icon--caution').exists()).toBe(true)
  })

  it('iconClass', () => {
    const alert = mount(Alert, {
      propsData: {
        showAlert: true,
        iconClass: 'custom-glyph-clients'
      }
    })
    expect(alert.find('.custom-glyph-clients').exists()).toBe(true)
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
    expect(alert.find('ao-alert__dismiss').exists())
    alert.find('.ao-alert__dismiss button').trigger('click')
    expect(alert.emitted()['update:showAlert']).toBeTruthy()
  })
})
