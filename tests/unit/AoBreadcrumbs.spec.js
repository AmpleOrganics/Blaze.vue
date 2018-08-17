import { mount } from '@vue/test-utils'
import Breadcrumbs from '@/components/AoBreadcrumbs.vue'

describe('Breadcrumb', () => {
  it('creates a breadcrumb component', () => {
    const breadcrumb = mount(Breadcrumbs, {
      stubs: {
        routerLink: `<a></a>`
      },
      propsData: {
        paths: [
          { name: 'Home', path: '/' },
          { name: 'Somewhere', path: '/place' },
          { name: 'Current', active: true }
        ]
      }
    })
    expect(breadcrumb.findAll('a').length).toBe(2)
    expect(breadcrumb.findAll('span').at(6).text()).toBe('Current')
    expect(breadcrumb.findAll('span').at(5).text()).toBe('/')
    expect(breadcrumb.findAll('span').at(3).text()).toBe('/')

    expect(breadcrumb.find('.ao-breadcrumbs__crumb--active').exists()).toBe(true)
    expect(breadcrumb.find('.ao-breadcrumbs__crumb--active').text()).toBe('Current')
  })

  it('changes separator', () => {
    const breadcrumb = mount(Breadcrumbs, {
      stubs: {
        routerLink: `<a></a>`
      },
      propsData: {
        separator: '>',
        paths: [
          { name: 'Home', path: '/' },
          { name: 'Somewhere', path: '/place' },
          { name: 'Current', active: true }
        ]
      }
    })
    expect(breadcrumb.findAll('span').at(5).text()).toBe('>')
    expect(breadcrumb.findAll('span').at(3).text()).toBe('>')
  })
})
