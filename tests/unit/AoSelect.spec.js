import { mount } from '@vue/test-utils'
import Select from '@/components/AoSelect.vue'

describe('Select', () => {
  it('create', () => {
    const select = mount(Select, {
      propsData: {
        label: 'test',
        options: []
      }
    })
    expect(select.text()).toBe('test')
    expect(select.classes()).toContain('ao-form-group')
  })

  it('disabled', () => {
    const select = mount(Select, {
      propsData: {
        label: 'test0',
        options: [],
        disabled: true
      }
    })
    expect(select.text()).toBe('test0')
    expect(select.contains(':disabled')).toBe(true)
  })

  it('options', () => {
    const select = mount(Select, {
      propsData: {
        label: 'Test',
        options: ['test', 'test1']
      }
    })
    expect(select.findAll('option').at(0).element.value).toBe('test')
    expect(select.findAll('option').at(1).element.value).toBe('test1')
  })
})
