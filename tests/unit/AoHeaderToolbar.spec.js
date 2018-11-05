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

  it('raise onTitleClick event', () => {
    const titleClicked = jest.fn()
    const headerToolbar = mount(HeaderToolbar, {
      propsData: {
        title: 'Test',
        titleClicked,
        iconHtml: '<i>icon</i>',
        iconUrl: ''
      }
    })

    headerToolbar.find('.ao-header-toolbar__icon').trigger('click')
    expect(titleClicked.mock.calls.length).toBe(1)

    headerToolbar.find('.ao-header-toolbar__title-text').trigger('click')
    expect(titleClicked.mock.calls.length).toBe(2)

    headerToolbar.setProps({ iconHtml: '', iconUrl: '#' })
    headerToolbar.find('.ao-header-toolbar__icon').trigger('click')
    expect(titleClicked.mock.calls.length).toBe(3)
  })
})
