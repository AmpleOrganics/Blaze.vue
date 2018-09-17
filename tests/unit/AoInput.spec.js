import { mount } from '@vue/test-utils'
import Input from '@/components/AoInput.vue'
import instructionText from './helpers/instructionText'

describe('Input', () => {
  const getFormControlElement = (wrapper) => wrapper.find('.ao-form-control')

  it('create', () => {
    const input = mount(Input, {
      propsData: {
        label: 'label'
      }
    })
    expect(input.text()).toBe('label')
    expect(input.classes()).toContain('ao-form-group')
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

  it('invalid', () => {
    const input = mount(Input, {
      propsData: {
        label: 'label'
      }
    })
    expect(getFormControlElement(input).classes().includes('.ao-form-control--invalid')).toBe(false)

    input.setProps({ invalid: true })
    expect(getFormControlElement(input).classes()).toContain('ao-form-control--invalid')
  })

  it('size', () => {
    const input = mount(Input, {
      propsData: {
        label: 'label',
        size: 'small'
      }
    })

    expect(getFormControlElement(input).classes()).toContain('ao-form-control--small')
  })

  it('emit', () => {
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

  it('instruction text', () => {
    const input = mount(Input, {
      propsData: {
        type: 'text',
        label: 'test'
      }
    })

    instructionText.assert(input)
  })
})
