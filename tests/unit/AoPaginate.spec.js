import { mount } from '@vue/test-utils'
import Paginate from '@/components/AoPaginate.vue'

describe('Checkbox', () => {
  it('create', () => {
    const paginate = mount(Paginate, {
      propsData: {
        totalPages: 10,
        currentPage: 1
      }
    })
    expect(paginate.classes()).toContain('ao-paginate')
  })

  it('shows right chevron', () => {
    const paginate = mount(Paginate, {
      propsData: {
        totalPages: 10,
        currentPage: 1
      }
    })
    expect(paginate.find('.right-chevron').isVisible()).toBe(true)
    expect(paginate.find('.left-chevron').isVisible()).toBe(false)
  })

  it('shows left chevron', () => {
    const paginate = mount(Paginate, {
      propsData: {
        totalPages: 10,
        currentPage: 10
      }
    })
    expect(paginate.find('.left-chevron').isVisible()).toBe(true)
    expect(paginate.find('.right-chevron').exists()).toBe(false)
  })

  it('shows both chevrons', () => {
    const paginate = mount(Paginate, {
      propsData: {
        totalPages: 10,
        currentPage: 2
      }
    })
    expect(paginate.find('.left-chevron').isVisible()).toBe(true)
    expect(paginate.find('.right-chevron').isVisible()).toBe(true)
  })

  it('firstDots', () => {
    const paginate = mount(Paginate, {
      propsData: {
        totalPages: 10,
        currentPage: 10
      }
    })

    expect(paginate.vm.lastDots).toBe(false)
    expect(paginate.vm.firstDots).toBe(true)
    expect(paginate.find('.ao-paginate__first-dots').isVisible()).toBe(true)
    expect(paginate.find('.ao-paginate__last-dots').exists()).toBe(false)
  })

  it('lastDots', () => {
    const paginate = mount(Paginate, {
      propsData: {
        totalPages: 10,
        currentPage: 1
      }
    })

    expect(paginate.vm.lastDots).toBe(true)
    expect(paginate.vm.firstDots).toBe(false)
    expect(paginate.find('.ao-paginate__last-dots').isVisible()).toBe(true)
    expect(paginate.find('.ao-paginate__first-dots').exists()).toBe(false)
  })

  it('both dots', () => {
    const paginate = mount(Paginate, {
      propsData: {
        totalPages: 10,
        currentPage: 5
      }
    })

    expect(paginate.vm.lastDots).toBe(true)
    expect(paginate.vm.firstDots).toBe(true)
    expect(paginate.find('.ao-paginate__first-dots').isVisible()).toBe(true)
    expect(paginate.find('.ao-paginate__last-dots').isVisible()).toBe(true)
  })

  it('shows totalPages', () => {
    const paginate = mount(Paginate, {
      propsData: {
        totalPages: 4,
        currentPage: 1
      }
    })

    expect(paginate.vm.lastDots).toBe(false)
    expect(paginate.vm.firstDots).toBe(false)
    expect(paginate.find('.ao-paginate__last-dots').exists()).toBe(false)
    expect(paginate.find('.ao-paginate__first-dots').exists()).toBe(false)
  })

  it('emit currentPage', () => {
    const paginate = mount(Paginate, {
      propsData: {
        totalPages: 10,
        currentPage: 5
      }
    })

    paginate.find('.right-chevron').trigger('click')
    expect(paginate.emitted()['update:currentPage'][0][0]).toEqual(6)
  })
})
