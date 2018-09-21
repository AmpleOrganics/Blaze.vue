import { mount } from '@vue/test-utils'
import Checkbox from '@/components/AoCheckbox.vue'

describe('Checkbox', () => {
  it('create', () => {
    const checkbox = mount(Checkbox, {
      propsData: {
        checkboxLabel: 'test',
        checkboxValue: 'value'
      }
    })
    expect(checkbox.text()).toBe('test')
    expect(checkbox.classes()).toContain('ao-checkbox')
  })

  it('disabled', () => {
    const checkbox = mount(Checkbox, {
      propsData: {
        checkboxLabel: 'test0',
        checkboxValue: 'value',
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
        checkboxValue: 'value',
        showLabel: false
      }
    })
    expect(checkbox.find('span').isVisible()).toBe(false)
  })

  it('emit', () => {
    const checkbox = mount(Checkbox, {
      propsData: {
        checkboxLabel: 'test',
        checkboxValue: 'value'
      }
    })

    // mark checked
    checkbox.find('.ao-checkbox__input').trigger('click')
    expect(checkbox.emitted().input[0][0]).toBe(true)

    // mark unchecked
    checkbox.find('.ao-checkbox__input').trigger('click')
    expect(checkbox.emitted().input[1][0]).toBe(false)
  })
})
