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
  })
})
