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
    expect(fileUpload.find('.ao-form-control--invalid').exists()).toBe(true)
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
    expect(fileUpload.find(':disabled').exists()).toBe(true)
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

  it('emit focus', () => {
    const fileUpload = mount(FileUpload, {
      propsData: {
        label: 'label',
        name: 'test1'
      }
    })

    fileUpload.find('.ao-form-control').trigger('focus')
    expect(fileUpload.emitted().focus).toBeTruthy()
  })

  it('instruction text', async () => {
    const fileUpload = mount(FileUpload, {
      propsData: {
        label: 'test',
        name: 'test1'
      }
    })

    await instructionText.assert(fileUpload)
  })

  it('invalid message', async () => {
    const fileUpload = mount(FileUpload, {
      propsData: {
        name: 'text',
        label: 'test'
      }
    })

    await invalidMessage.assert(fileUpload)
  })
})
