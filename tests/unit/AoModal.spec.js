import { mount } from '@vue/test-utils'
import Modal from '@/components/AoModal.vue'

describe('Modal', () => {
  it('create', () => {
    const modal = mount(Modal, {
      propsData: {
        headerText: 'test'
      }
    })
    expect(modal.text()).toBe('test')
    expect(modal.find('.ao-modal-mask').exists()).toBe(true)
    expect(modal.find('.ao-modal--medium').exists()).toBe(true)
  })

  it('small size', () => {
    const modal = mount(Modal, {
      propsData: {
        headerText: 'test0',
        size: 'small'
      }
    })
    expect(modal.text()).toBe('test0')
    expect(modal.find('.ao-modal--small').exists()).toBe(true)
  })

  it('medium size', () => {
    const modal = mount(Modal, {
      propsData: {
        headerText: 'test1',
        size: 'medium'
      }
    })
    expect(modal.text()).toBe('test1')
    expect(modal.find('.ao-modal--medium').exists()).toBe(true)
  })

  it('large size', () => {
    const modal = mount(Modal, {
      propsData: {
        headerText: 'test1',
        size: 'large'
      }
    })
    expect(modal.text()).toBe('test1')
    expect(modal.find('.ao-modal--large').exists()).toBe(true)
  })

  it('destructive', () => {
    const modal = mount(Modal, {
      propsData: {
        headerText: 'test2',
        destructive: true
      }
    })
    expect(modal.text()).toBe('test2')
    expect(modal.find('.ao-modal__header--destructive').exists()).toBe(true)
  })

  it('caution', () => {
    const modal = mount(Modal, {
      propsData: {
        headerText: 'test3',
        caution: true
      }
    })
    expect(modal.text()).toBe('test3')
    expect(modal.find('.ao-modal__header--caution').exists()).toBe(true)
  })

  it('emit', () => {
    const modal = mount(Modal, {
      propsData: {
        headerText: 'test'
      }
    })

    modal.find('.ao-modal').trigger('click')
    expect(modal.emitted().modalClose).toBeTruthy()
  })
})
