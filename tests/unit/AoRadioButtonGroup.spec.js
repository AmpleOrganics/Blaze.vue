import { mount } from '@vue/test-utils'
import RadioButtonGroup from '@/components/AoRadioButtonGroup.vue'

const options = [
  { name: 'Option 1', value: 'option 1' },
  { name: 'Option 2', value: 'option 2' }
]

describe('Radio', () => {
  it('mounts', () => {
    const radioButtonGroup = mount(RadioButtonGroup, {
      propsData: {
        options: options,
        value: false,
        name: 'name'
      }
    })
    expect(radioButtonGroup.classes()).toContain('ao-radio-button-group')
  })

  it('preselects based on mounting value', () => {
    const selectedOptionValue = options[1].value
    const radioButtonGroup = mount(RadioButtonGroup, {
      propsData: {
        options: options,
        value: selectedOptionValue,
        name: 'name'
      }
    })
    expect(radioButtonGroup.find('.ao-radio-button-group__option-input:checked').element.value).toBe(selectedOptionValue)
  })

  it('emits on option selection', () => {
    const selectedOptionValue = options[1].value
    const radioButtonGroup = mount(RadioButtonGroup, {
      propsData: {
        options: options,
        value: selectedOptionValue,
        name: 'name'
      }
    })
    radioButtonGroup.find(`.ao-radio-button-group__option-input[value="${selectedOptionValue}"]`).trigger('input')
    expect(radioButtonGroup.emitted().input[0][0]).toBe(selectedOptionValue)
  })
})
