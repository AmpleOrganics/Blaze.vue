import { shallowMount } from '@vue/test-utils'
import DropdownItem from '@/components/AoDropdownItem.vue'

describe('DropdownItem', () => {
  it('create', () => {
    const wrapper = shallowMount(DropdownItem, {
      context: {
        props: {
          disabled: false
        }
      }
    })
    expect(wrapper.classes()).toContain('ao-dropdown__item')
  })

  it('disabled', () => {
    const wrapper = shallowMount(DropdownItem, {
      context: {
        props: {
          disabled: true
        }
      }
    })
    expect(wrapper.classes()).toContain('disabled')
  })

  it('click events', () => {
    const stub = jest.fn()
    const wrapper = shallowMount(DropdownItem, {
      context: {
        props: {
          disabled: false
        }
      },
      listeners: {
        'click': stub
      }
    })
    wrapper.find('.ao-dropdown__item').trigger('click')
    expect(stub).toHaveBeenCalled()
  })
})
