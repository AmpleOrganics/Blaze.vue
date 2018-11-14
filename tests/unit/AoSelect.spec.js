import { mount } from '@vue/test-utils'
import Select from '@/components/AoSelect.vue'
import instructionText from './helpers/instructionText'
import invalidMessage from './helpers/invalidMessage'

describe('Select', () => {
  it('create', () => {
    const select = mount(Select, {
      propsData: {
        label: 'label'
      }
    })
    expect(select.text()).toBe('label')
    expect(select.classes()).toContain('ao-form-group')
  })

  it('disabled', () => {
    const select = mount(Select, {
      propsData: {
        label: 'label',
        disabled: true
      }
    })
    expect(select.text()).toBe('label')
    expect(select.find('.ao-form-control').attributes().disabled).toBe('disabled')
  })

  it('options', () => {
    const select = mount(Select, {
      propsData: {
        label: 'test'
      },
      slots: {
        default: '<option value="red">red</option><option value="green">green</option>'
      }
    })

    select.find('.ao-form-control').findAll('option').at(1).setSelected()
    expect(select.emitted().input[0][0]).toBe('green')
  })

  it('has a placeholder', () => {
    const select = mount(Select, {
      propsData: {
        label: 'label',
        placeholder: 'Select One'
      }
    })

    expect(select.findAll('option').at(0).element.value).toBe('')
    expect(select.findAll('option').at(0).html()).toContain('Select One')
  })

  it('size', () => {
    const select = mount(Select, {
      propsData: {
        label: 'label',
        size: 'small'
      }
    })

    expect(select.find('.ao-form-control').classes()).toContain('ao-form-control--small')
  })

  it('instruction text', () => {
    const select = mount(Select, {
      propsData: {
        label: 'test'
      }
    })

    instructionText.assert(select)
  })

  it('emit blur', () => {
    const select = mount(Select, {
      propsData: {
        label: 'label'
      }
    })

    select.find('.ao-form-control').trigger('blur')
    expect(select.emitted().blur).toBeTruthy()
  })

  it('invalid message', () => {
    const select = mount(Select, {
      propsData: {
        label: 'test'
      }
    })

    invalidMessage.assert(select)
  })

  it('changes what is selected when prop changes', () => {
    const select = mount(Select, {
      propsData: {
        label: 'test',
        value: 'test'
      },
      slots: {
        default: ['<option value="blaze">blaze</option><option value="tester">tester</option>']
      }
    })

    select.setProps({value: 'tester'})
    expect(select.find('.ao-form-control').element.value).toBe('tester')
  })
})
