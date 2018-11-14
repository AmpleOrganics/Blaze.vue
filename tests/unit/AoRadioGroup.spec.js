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
        value: false
      }
    })
    expect(radioGroup.classes()).toContain('ao-radio-group')
  })

  it('preselects based on mounting value', () => {
    const radioGroup = mount(RadioGroup, {
      propsData: {
        options: options,
        value: options[0].value
      }
    })
    expect(radioGroup.find('label:first-of-type').classes()).toContain('ao-radio-group__option--active')
  })

  it('emits on option selection', () => {
    const radioGroup = mount(RadioGroup, {
      propsData: {
        options: options,
        value: options[0].value
      }
    })
    radioGroup.find('label:nth-child(2)').trigger('click')
    expect(radioGroup.emitted().input[0][0]).toBe('option 2')
  })
})
