import { shallowMount } from '@vue/test-utils'
import Dropdown from '@/components/AoDropdown.vue'

describe('dropdown', () => {
  it('create', () => {
    const wrapper = shallowMount(Dropdown, {
      propsData: {
        links: [],
        showDropdown: true
      }
    })
    expect(wrapper.classes()).toContain('ao-dropdown')
    expect(wrapper.classes()).toContain('ao-dropdown--left')
  })

  it('right direction', () => {
    const wrapper = shallowMount(Dropdown, {
      propsData: {
        links: [],
        showDropdown: true,
        direction: 'right'
      }
    })
    expect(wrapper.classes()).toContain('ao-dropdown')
    expect(wrapper.classes()).toContain('ao-dropdown--right')
  })
})
