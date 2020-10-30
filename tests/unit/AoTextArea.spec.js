import { mount } from '@vue/test-utils'
import TextArea from '@/components/AoTextArea.vue'
import instructionText from './helpers/instructionText'
import invalidMessage from './helpers/invalidMessage'

describe('TextArea', () => {
  it('create', () => {
    const textArea = mount(TextArea)
    expect(textArea.classes()).toContain('ao-form-group')
  })

  it('disabled', () => {
    const textArea = mount(TextArea, {
      propsData: {
        disabled: true
      }
    })
    expect(textArea.find(':disabled').exists()).toBe(true)
  })

  it('emit input', () => {
    const textArea = mount(TextArea, {
      propsData: {
        value: 'value'
      }
    })

    textArea.find('.ao-form-control').trigger('input')
    expect(textArea.emitted().input[0][0]).toBe('value')
  })

  it('emit blur', () => {
    const textArea = mount(TextArea, {
      propsData: {
        value: 'value'
      }
    })

    textArea.find('.ao-form-control').trigger('blur')
    expect(textArea.emitted().blur).toBeTruthy()
  })

  it('emit focus', () => {
    const textArea = mount(TextArea, {
      propsData: {
        value: 'value'
      }
    })

    textArea.find('.ao-form-control').trigger('focus')
    expect(textArea.emitted().focus).toBeTruthy()
  })

  it('emit change', () => {
    const textArea = mount(TextArea, {
      propsData: {
        value: 'value'
      }
    })

    textArea.find('.ao-form-control').trigger('change')
    expect(textArea.emitted().change[0][0]).toBe('value')
  })

  it('instruction text', () => {
    const textArea = mount(TextArea)

    instructionText.assert(textArea)
  })

  it('invalid message', async () => {
    const textArea = mount(TextArea)

    await invalidMessage.assert(textArea)
  })
})
