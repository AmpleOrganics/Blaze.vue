import { mount } from '@vue/test-utils'
import FileUpload from '@/components/AoFileUpload.vue'

describe('FileUpload', () => {
  it('create', () => {
    const fileUpload = mount(FileUpload, {
      propsData: {
        label: 'test',
        name: 'test'
      }
    })
    expect(fileUpload.text()).toBe('test')
    expect(fileUpload.classes()).toContain('ao-form-group')
  })

  it('invalid', () => {
    const fileUpload = mount(FileUpload, {
      propsData: {
        label: 'test0',
        name: 'test0',
        invalid: true
      }
    })
    expect(fileUpload.text()).toBe('test0')
    expect(fileUpload.contains('.ao-form-control--invalid')).toBe(true)
  })

  it('disabled', () => {
    const fileUpload = mount(FileUpload, {
      propsData: {
        label: 'test1',
        name: 'test1',
        disabled: true
      }
    })
    expect(fileUpload.text()).toBe('test1')
    expect(fileUpload.contains(':disabled')).toBe(true)
  })
})
