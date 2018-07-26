import { mount } from '@vue/test-utils'
import Input from '@/components/AoInput.vue'

describe('Input', () => {
  it('create', () => {
    const input = mount(Input, {
      propsData: {
        type: 'text',
        label: 'test'
      }
    })
    expect(input.text()).toBe('test')
    expect(input.classes()).toContain('ao-form-group')
  })

  it('iconClass', () => {
    const input = mount(Input, {
      propsData: {
        type: 'text',
        label: 'test0',
        iconClass: 'custom-glyph-clients'
      }
    })
    expect(input.text()).toBe('test0')
    expect(input.contains('.custom-glyph-clients')).toBe(true)
  })

  it('hasError', () => {
    const input = mount(Input, {
      propsData: {
        type: 'text',
        label: 'test1',
        hasError: true
      }
    })
    expect(input.text()).toBe('test1')
    expect(input.contains('.ao-form-control--has-error')).toBe(true)
  })
})
