import { mount } from '@vue/test-utils'
import HeaderToolbar from '@/components/AoHeaderToolbar.vue'

describe('HeaderToolbar', () => {
  it('creates a header toolbar component', () => {
    const headerToolbar = mount(HeaderToolbar, {
      propsData: {
        title: 'This is a title'
      }
    })
    expect(headerToolbar.text()).toBe('This is a title')
    expect(headerToolbar.classes()).toContain('ao-header-toolbar')
    expect(headerToolbar.find('.ao-header-toolbar__controls').exists()).toBe(true)
  })

  it('iconClass', () => {
    const headerToolbar = mount(HeaderToolbar, {
      propsData: {
        title: 'Test',
        iconHtml: "'🐸'",
        iconClass: 'custom-glyphicon-ok'
      }
    })
    expect(headerToolbar.find('.custom-glyphicon-ok').exists()).toBe(true)
  })

  it('applies a fixed class', () => {
    const headerToolbar = mount(HeaderToolbar, {
      propsData: {
        title: 'Test',
        fixed: true
      }
    })
    expect(headerToolbar.find('.ao-header-toolbar--fixed').exists()).toBe(true)
  })
})
