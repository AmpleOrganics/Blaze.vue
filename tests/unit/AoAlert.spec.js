import { mount } from '@vue/test-utils'
import Alert from '@/components/AoAlert.vue'

describe('Alert', () => {
  it('create', () => {
    const alert = mount(Alert, {
      propsData: {
        showAlert: true
      }
    })
    expect(alert.classes()).toContain('ao-alert')
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
})
