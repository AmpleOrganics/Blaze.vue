import { mount } from '@vue/test-utils'
import Checkbox from '@/components/AoCheckbox.vue'

describe('Checkbox', () => {
  it('create', () => {
    const checkbox = mount(Checkbox, {
      propsData: {
        checkboxLabel: 'test'
      }
    })
    expect(checkbox.text()).toBe('test')
    expect(checkbox.classes()).toContain('ao-checkbox')
  })

  it('disabled', () => {
    const checkbox = mount(Checkbox, {
      propsData: {
        checkboxLabel: 'test0',
        disabled: true
      }
    })
    expect(checkbox.text()).toBe('test0')
    expect(checkbox.contains(':disabled')).toBe(true)
  })

  it('showLabel', () => {
    const checkbox = mount(Checkbox, {
      propsData: {
        checkboxLabel: 'test0',
        showLabel: false
      }
    })
    expect(checkbox.find('span').isVisible()).toBe(false)
  })
})
