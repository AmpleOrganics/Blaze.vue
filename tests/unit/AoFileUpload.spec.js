import { mount } from '@vue/test-utils'
import FileUpload from '@/components/AoFileUpload.vue'
import instructionText from './helpers/instructionText'
import invalidMessage from './helpers/invalidMessage'

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

  it('emit change', () => {
    const fileUpload = mount(FileUpload, {
      propsData: {
        label: 'label',
        name: 'test1'
      }
    })

    fileUpload.find('.ao-form-control').trigger('change')
    expect(fileUpload.emitted().change).toBeTruthy()
  })

  it('emit blur', () => {
    const fileUpload = mount(FileUpload, {
      propsData: {
        label: 'label',
        name: 'test1'
      }
    })

    fileUpload.find('.ao-form-control').trigger('blur')
    expect(fileUpload.emitted().blur).toBeTruthy()
  })

  it('instruction text', () => {
    const fileUpload = mount(FileUpload, {
      propsData: {
        label: 'test',
        name: 'test1'
      }
    })

    instructionText.assert(fileUpload)
  })

  it('invalid message', () => {
    const fileUpload = mount(FileUpload, {
      propsData: {
        name: 'text',
        label: 'test'
      }
    })

    invalidMessage.assert(fileUpload)
  })
})
