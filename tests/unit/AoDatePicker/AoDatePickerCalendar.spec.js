import { mount } from '@vue/test-utils'
import AoDatePickerCalendar from '@/components/AoDatePicker/AoDatePickerCalendar.vue'

describe('AoDatePickerCalendar', () => {
  it('today', () => {
    const datePicker = mount(AoDatePickerCalendar, {
      propsData: {
        inputDate: '',
        monthNames: [],
        dayNames: []
      },
      stubs: ['AoDatePickerCalendarDay']
    })

    datePicker.find('.ao-datepickercalendar__today-button').trigger('click')
    expect(datePicker.classes()).toContain('ao-datepickercalendar')
    expect(datePicker.emitted().selected).toBeTruthy()
  })
})
