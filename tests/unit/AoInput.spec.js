import { mount } from '@vue/test-utils'
import Input from '@/components/AoInput.vue'
import instructionText from './helpers/instructionText'
import invalidMessage from './helpers/invalidMessage'

describe('Input', () => {
  const getFormControlElement = wrapper => wrapper.find('.ao-form-control')

  it('create', () => {
    const input = mount(Input, {
      propsData: {
        label: 'label'
      }
    })
    expect(input.text()).toBe('label')
    expect(input.classes()).toContain('ao-form-group')
  })

  it('label for & input id', () => {
    const input = mount(Input, {
      propsData: {
        label: 'label',
        name: 'name'
      }
    })
    expect(getFormControlElement(input).attributes('id')).toBe('name_2')
    expect(input.find('.ao-form-group__label label').attributes('for')).toBe('name_2')
  })

  it('iconClass', () => {
    const input = mount(Input, {
      propsData: {
        label: 'label',
        iconClass: 'custom-glyph-clients'
      }
    })
    expect(input.contains('.custom-glyph-clients')).toBe(true)
  })

  it('prepend', () => {
    const input = mount(Input, {
      propsData: {
        label: 'label',
        prepend: 'Prepend Text'
      }
    })
    expect(input.find('.ao-input__prepend').exists()).toBe(true)
    expect(input.find('.ao-input__prepend').text()).toBe('Prepend Text')
  })

  it('addOn', () => {
    const input = mount(Input, {
      propsData: {
        label: 'label',
        addOn: 'Addon Text'
      }
    })
    expect(input.find('.ao-input__addon').exists()).toBe(true)
    expect(input.find('.ao-input__addon').text()).toBe('Addon Text')
  })

  it('isIconClickable', () => {
    const input = mount(Input, {
      propsData: {
        label: 'label',
        iconClass: 'some-icon',
        isIconClickable: true
      }
    })
    input.find('.ao-input__icon--clickable').trigger('click')
    expect(input.emitted()['icon-clicked']).toBeTruthy()
  })

  it('invalid', () => {
    const input = mount(Input, {
      propsData: {
        label: 'label'
      }
    })
    expect(
      getFormControlElement(input)
        .classes()
        .includes('.ao-form-control--invalid')
    ).toBe(false)

    input.setProps({ invalid: true })
    expect(getFormControlElement(input).classes()).toContain(
      'ao-form-control--invalid'
    )
  })

  it('size', () => {
    const input = mount(Input, {
      propsData: {
        label: 'label',
        size: 'small'
      }
    })

    expect(getFormControlElement(input).classes()).toContain(
      'ao-form-control--small'
    )
  })

  it('emit input', () => {
    const input = mount(Input, {
      propsData: {
        type: 'text',
        label: 'label',
        value: 'value'
      }
    })

    input.find('.ao-form-control').trigger('input')
    expect(input.emitted().input[0][0]).toBe('value')
  })

  it('emit blur', () => {
    const input = mount(Input, {
      propsData: {
        type: 'text',
        label: 'label',
        value: 'value'
      }
    })

    input.find('.ao-form-control').trigger('blur')
    expect(input.emitted().blur).toBeTruthy()
  })

  it('emit change', () => {
    const input = mount(Input, {
      propsData: {
        type: 'text',
        label: 'label',
        value: 'value'
      }
    })

    input.find('.ao-form-control').trigger('change')
    expect(input.emitted().change[0][0]).toBe('value')
  })

  it('emit focus', () => {
    const input = mount(Input, {
      propsData: {
        type: 'text',
        label: 'label',
        value: 'value'
      }
    })

    input.find('.ao-form-control').trigger('focus')
    expect(input.emitted().focus).toBeTruthy()
  })

  it('instruction text', () => {
    const input = mount(Input, {
      propsData: {
        type: 'text',
        label: 'test'
      }
    })

    instructionText.assert(input)
  })

  it('invalid message', () => {
    const input = mount(Input, {
      propsData: {
        type: 'text',
        label: 'test'
      }
    })

    invalidMessage.assert(input)
  })
})
