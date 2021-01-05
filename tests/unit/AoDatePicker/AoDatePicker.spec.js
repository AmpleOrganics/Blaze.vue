import { mount } from '@vue/test-utils'
import DatePicker from '@/components/AoDatePicker/AoDatePicker.vue'

describe('DatePicker', () => {
  it('show and hide calendar', async () => {
    const datePicker = mount(DatePicker, {
      propsData: {
        label: '',
        iconClass: 'some-icon'
      },
      stubs: ['AoDatePickerCalendar']
    })

    expect(datePicker.find('.ao-datepicker').exists()).toBe(true)

    datePicker.find('.ao-input__icon--clickable').trigger('click')
    await datePicker.vm.$nextTick()
    expect(datePicker.find('.ao-datepicker__calendar').exists()).toBe(true)

    datePicker.find('.ao-input__icon--clickable').trigger('click')
    await datePicker.vm.$nextTick()
    expect(datePicker.find('.ao-datepicker__calendar').exists()).toBe(false)
  })

  it('select date', async () => {
    const datePicker = mount(DatePicker, {
      propsData: {
        label: '',
        iconClass: 'some-icon',
        value: '2018-01-01'
      },
      stubs: {
        AoDatePickerCalendar: {
          template: `<p class="ao-datepickercalendar" @selected="$emit('selected')"></p>`
        }
      }
    })

    datePicker.find('.ao-input__icon--clickable').trigger('click')
    await datePicker.vm.$nextTick()
    datePicker.find('.ao-datepickercalendar').trigger('selected')
    await datePicker.vm.$nextTick()
    expect(datePicker.find('.ao-datepicker__calendar').exists()).toBe(false)
  })

  it('emit blur', () => {
    const input = mount(DatePicker, {
      propsData: {
        type: 'text',
        label: 'label',
        value: 'value'
      },
      stubs: ['AoDatePickerCalendar']
    })

    input.find('.ao-form-control').trigger('blur')
    expect(input.emitted().blur).toBeTruthy()
  })

  it('emit change', () => {
    const input = mount(DatePicker, {
      propsData: {
        type: 'text',
        label: 'label',
        value: 'value'
      },
      stubs: ['AoDatePickerCalendar']
    })

    input.find('.ao-form-control').trigger('change')
    expect(input.emitted().change[0][0]).toBe('value')
  })

  it('emit focus', () => {
    const input = mount(DatePicker, {
      propsData: {
        type: 'text',
        label: 'label',
        value: 'value'
      },
      stubs: ['AoDatePickerCalendar']
    })

    input.find('.ao-form-control').trigger('focus')
    expect(input.emitted().focus).toBeTruthy()
  })

  it('hide calendar when click outside', () => {
    const input = mount(DatePicker, {
      propsData: {
        type: 'text',
        label: 'label',
        value: 'value'
      },
      stubs: ['AoDatePickerCalendar'],
      directives: {
        clickOutside: {
          bind (el, binding, vnode) {
            vnode.context[binding.expression]()
          }
        }
      }
    })

    expect(input.find('.ao-datepicker__calendar').exists()).toBe(false)
  })
})
