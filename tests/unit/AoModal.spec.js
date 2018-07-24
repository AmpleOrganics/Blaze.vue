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
    expect(modal.classes()).toContain('ao-modal-mask') // will need to change
    expect(modal.contains('.ao-modal--md')).toBe(true)
  })

  it('small size', () => {
    const modal = mount(Modal, {
      propsData: {
        headerText: 'test0',
        size: 'sm'
      }
    })
    expect(modal.text()).toBe('test0')
    expect(modal.contains('.ao-modal--sm')).toBe(true)
  })

  it('large size', () => {
    const modal = mount(Modal, {
      propsData: {
        headerText: 'test1',
        size: 'lg'
      }
    })
    expect(modal.text()).toBe('test1')
    expect(modal.contains('.ao-modal--lg')).toBe(true)
  })

  it('destructive', () => {
    const modal = mount(Modal, {
      propsData: {
        headerText: 'test2',
        destructive: true
      }
    })
    expect(modal.text()).toBe('test2')
    expect(modal.contains('.ao-modal__header--destructive')).toBe(true)
  })

  it('caution', () => {
    const modal = mount(Modal, {
      propsData: {
        headerText: 'test3',
        caution: true
      }
    })
    expect(modal.text()).toBe('test3')
    expect(modal.contains('.ao-modal__header--caution')).toBe(true)
  })
})
