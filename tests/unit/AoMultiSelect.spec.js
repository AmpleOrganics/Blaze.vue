import { mount } from '@vue/test-utils'
import MultiSelect from '@/components/AoMultiSelect.vue'
import instructionText from './helpers/instructionText'
import invalidMessage from './helpers/invalidMessage'
import { createStubbedComponent } from 'vue-test-utils-helpers'

describe('MultiSelect', () => {
  it('create', () => {
    const multiselect = mount(MultiSelect, {
      propsData: {
        label: 'label'
      }
    })
    expect(multiselect.text()).toContain('label')
    expect(multiselect.classes()).toContain('ao-form-group')
  })

  it('disabled', () => {
    const multiselect = mount(MultiSelect, {
      propsData: {
        label: 'label',
        disabled: true
      }
    })
    multiselect.find('.ao-multi-select__summary').trigger('click')
    expect(multiselect.text()).toBe('label')
    expect(multiselect.find('.ao-form-control').attributes().disabled).toBe(
      'disabled'
    )
  })

  it('disableAll', () => {
    const multiselect = mount(MultiSelect, {
      propsData: {
        label: 'label',
        disableAll: true
      }
    })
    multiselect.find('.ao-multi-select__summary').trigger('click')
    expect(multiselect.text()).toBe('label')
    expect(multiselect.find('.ao-form-control').attributes().disabled).toBe(
      'disabled'
    )
  })

  it('show and hide options', () => {
    const multiselect = mount(MultiSelect, {
      propsData: {
        label: 'test'
      },
      slots: {
        default:
          '<div class="test-option">red</div><div class="test-option">green</div>'
      },
      stubs: {
        'ao-button': createStubbedComponent({ events: ['click'] })
      }
    })

    expect(multiselect.findAll('.test-option').length).toBe(0)
    multiselect.find('.ao-form-control').trigger('click')
    expect(multiselect.findAll('.test-option').length).toBe(2)
    multiselect.find('.ao-form-control').trigger('click')
    expect(multiselect.findAll('.test-option').length).toBe(0)
  })

  it('has a placeholder', () => {
    const multiselect = mount(MultiSelect, {
      propsData: {
        label: 'label',
        placeholder: 'MultiSelect'
      }
    })

    expect(
      multiselect
        .find('.ao-multi-select__summary-text')
        .html()
    ).toContain('MultiSelect')
  })

  it('size', () => {
    const multiselect = mount(MultiSelect, {
      propsData: {
        label: 'label',
        size: 'small'
      }
    })

    expect(multiselect.find('.ao-form-control').classes()).toContain(
      'ao-form-control--small'
    )
  })

  it('instruction text', () => {
    const multiselect = mount(MultiSelect, {
      propsData: {
        label: 'test'
      }
    })

    instructionText.assert(multiselect)
  })

  it('emit blur', () => {
    const multiselect = mount(MultiSelect, {
      propsData: {
        label: 'label'
      }
    })

    multiselect.find('.ao-form-control').trigger('blur')
    expect(multiselect.emitted().blur).toBeTruthy()
  })

  it('emit focus', () => {
    const multiselect = mount(MultiSelect, {
      propsData: {
        label: 'label'
      }
    })

    multiselect.find('.ao-form-control').trigger('focus')
    expect(multiselect.emitted().focus).toBeTruthy()
  })

  it('emit clear', () => {
    const multiselect = mount(MultiSelect, {
      propsData: {
        label: 'label'
      },
      stubs: {
        'ao-button': createStubbedComponent({ events: ['click'] })
      }
    })

    multiselect.find('.ao-form-control').trigger('click')
    multiselect.find('.ao-multi-select__clear').trigger('click')
    expect(multiselect.emitted().clear).toBeTruthy()
  })

  it('invalid message', () => {
    const multiselect = mount(MultiSelect, {
      propsData: {
        label: 'test'
      }
    })

    invalidMessage.assert(multiselect)
  })

  it('multiselect summary', () => {
    const multiselect = mount(MultiSelect, {
      propsData: {
        label: 'test',
        selected: ['blaze', 'tester']
      }
    })

    expect(multiselect.find('.ao-multi-select__summary-text').html()).toContain('blaze, tester')
  })

  it('hide options when click outside', () => {
    const input = mount(MultiSelect, {
      propsData: {
        label: 'label'
      },
      directives: {
        clickOutside: {
          bind (el, binding, vnode) {
            vnode.context[binding.expression]()
          }
        }
      }
    })

    expect(input.contains('.ao-multi-select__option')).toBe(false)
  })
})
