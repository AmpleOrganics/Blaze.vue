import { mount } from '@vue/test-utils'
import Switch from '@/components/AoSwitch.vue'

describe('Switch', () => {
  it('create', () => {
    const switchComponent = mount(Switch, {
      propsData: {
        switchLabel: 'test',
        switchValue: 'value'
      }
    })
    expect(switchComponent.text()).toBe('test')
    expect(switchComponent.classes()).toContain('ao-switch')
  })

  it('disabled', () => {
    const switchComponent = mount(Switch, {
      propsData: {
        switchLabel: 'test0',
        switchValue: 'value',
        disabled: true
      }
    })
    expect(switchComponent.text()).toBe('test0')
    expect(switchComponent.find(':disabled').exists()).toBe(true)
  })

  it('showLabel', () => {
    const switchComponent = mount(Switch, {
      propsData: {
        switchLabel: 'test0',
        switchValue: 'value',
        showLabel: false
      }
    })
    expect(switchComponent.find('.ao-switch__label-text').isVisible()).toBe(false)
  })

  it('emit input', () => {
    const switchComponent = mount(Switch, {
      propsData: {
        switchLabel: 'test',
        switchValue: 'value'
      }
    })

    // mark checked
    switchComponent.find('input').trigger('click')
    expect(switchComponent.emitted().input[0][0]).toBe(true)

    // mark unchecked
    switchComponent.find('input').trigger('click')
    expect(switchComponent.emitted().input[1][0]).toBe(false)
  })

  it('emit blur', () => {
    const switchComponent = mount(Switch, {
      propsData: {
        switchLabel: 'test',
        switchValue: 'value'
      }
    })

    switchComponent.find('input').trigger('blur')
    expect(switchComponent.emitted().blur).toBeTruthy()
  })

  it('emit focus', () => {
    const switchComponent = mount(Switch, {
      propsData: {
        switchLabel: 'test',
        switchValue: 'value'
      }
    })

    switchComponent.find('input').trigger('focus')
    expect(switchComponent.emitted().focus).toBeTruthy()
  })
})
