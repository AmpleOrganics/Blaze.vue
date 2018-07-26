import { mount } from '@vue/test-utils'
import FileUpload from '@/components/AoFileUpload.vue'

describe('FileUpload', () => {
  it('create', () => {
    const fileUpload = mount(FileUpload, {
      propsData: {
        label: 'test'
      }
    })
    expect(fileUpload.text()).toBe('test')
    expect(fileUpload.classes()).toContain('ao-form-group')
  })

  it('hasError', () => {
    const fileUpload = mount(FileUpload, {
      propsData: {
        label: 'test0',
        hasError: true
      }
    })
    expect(fileUpload.text()).toBe('test0')
    expect(fileUpload.contains('.ao-form-control--has-error')).toBe(true)
  })

  it('disabled', () => {
    const fileUpload = mount(FileUpload, {
      propsData: {
        label: 'test1',
        disabled: true
      }
    })
    expect(fileUpload.text()).toBe('test1')
    expect(fileUpload.contains(':disabled')).toBe(true)
  })
})
