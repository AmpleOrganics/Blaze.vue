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

    expect(radio.find('[type="radio"]').attributes().disabled).toBe('disabled')
  })

  it('emit input', () => {
    const radio = mount(Radio, {
      propsData: {
        value: 'value',
        val: 'value',
        name: 'test',
        label: 'label'
      }
    })

    radio.find('[type="radio"]').trigger('change')
    expect(radio.emitted().input[0][0]).toBe('value')
  })

  it('emit blur', () => {
    const radio = mount(Radio, {
      propsData: {
        value: 'value',
        val: 'value',
        name: 'test',
        label: 'label'
      }
    })

    radio.find('[type="radio"]').trigger('blur')
    expect(radio.emitted().blur).toBeTruthy()
  })

  it('emit focus', () => {
    const radio = mount(Radio, {
      propsData: {
        value: 'value',
        val: 'value',
        name: 'test',
        label: 'label'
      }
    })

    radio.find('[type="radio"]').trigger('focus')
    expect(radio.emitted().focus).toBeTruthy()
  })
})
