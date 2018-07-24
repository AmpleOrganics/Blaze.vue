import { mount } from '@vue/test-utils'
import Select from '@/components/AoSelect.vue'

describe('Select', () => {
  it('create', () => {
    const select = mount(Select, {
      propsData: {
        label: 'test'
      }
    })
    expect(select.text()).toBe('test')
    expect(select.classes()).toContain('ao-form-group')
  })

  it('disabled', () => {
    const select = mount(Select, {
      propsData: {
        label: 'test0',
        disabled: true
      }
    })
    expect(select.text()).toBe('test0')
    expect(select.contains(':disabled')).toBe(true)
  })

  it('has a placeholder', () => {
    const select = mount(Select, {
      propsData: {
        label: 'test0',
        placeholder: 'Select One'
      }
    })

    expect(select.findAll('option').at(0).element.value).toBe('')
    expect(select.findAll('option').at(0).html()).toContain('Select One')
  })
})
