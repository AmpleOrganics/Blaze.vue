import { mount } from '@vue/test-utils'
import TextArea from '@/components/AoTextArea.vue'

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
    expect(textArea.contains(':disabled')).toBe(true)
  })

  it('emit', () => {
    const textArea = mount(TextArea, {
      propsData: {
        value: 'value'
      }
    })

    textArea.find('.ao-form-control').trigger('input')
    expect(textArea.emitted().input[0][0]).toBe('value')
  })
})
