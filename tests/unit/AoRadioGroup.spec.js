import { mount } from '@vue/test-utils'
import RadioGroup from '@/components/AoRadioGroup.vue'

const options = [
  { name: 'Option 1', value: 'option 1' },
  { name: 'Option 2', value: 'option 2' }
]

describe('Radio', () => {
  it('mounts', () => {
    const radioGroup = mount(RadioGroup, {
      propsData: {
        options: options,
        value: false,
        name: 'name'
      }
    })
    expect(radioGroup.classes()).toContain('ao-radio-group')
  })

  it('preselects based on mounting value', () => {
    const selectedOptionValue = options[1].value
    const radioGroup = mount(RadioGroup, {
      propsData: {
        options: options,
        value: selectedOptionValue,
        name: 'name'
      }
    })
    expect(radioGroup.find('.ao-radio-group__option-input:checked').element.value).toBe(selectedOptionValue)
  })

  it('emits on option selection', () => {
    const selectedOptionValue = options[1].value
    const radioGroup = mount(RadioGroup, {
      propsData: {
        options: options,
        value: selectedOptionValue,
        name: 'name'
      }
    })
    radioGroup.find(`.ao-radio-group__option-input[value="${selectedOptionValue}"]`).trigger('input')
    expect(radioGroup.emitted().input[0][0]).toBe(selectedOptionValue)
  })
})
