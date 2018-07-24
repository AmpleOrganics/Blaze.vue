import { mount } from '@vue/test-utils'
import Radio from '@/components/AoRadio.vue'

describe('Radio', () => {
  it('create', () => {
    const radio = mount(Radio, {
      propsData: {
        value: 'Test',
        val: 'Test',
        name: 'test',
        label: 'label'
      }
    })
    expect(radio.classes()).toContain('ao-checkbox')
  })

  it('disabled', () => {
    const radio = mount(Radio, {
      propsData: {
        value: 'Test',
        val: 'Test',
        name: 'test',
        label: 'Label',
        disabled: true
      }
    })

    expect(radio.contains(':disabled')).toBe(true)
  })
})
