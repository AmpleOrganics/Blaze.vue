import { mount } from '@vue/test-utils'
import AoDatePickerCalendarDay from '@/components/AoDatePicker/AoDatePickerCalendarDay.vue'

describe('AoDatePickerCalendarDay', () => {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  it('render', async () => {
    const calendar = mount(AoDatePickerCalendarDay, {
      propsData: {
        inputDate: null,
        monthNames,
        dayNames
      }
    })

    calendar.setProps({ inputDate: '2018-02-01' })
    await calendar.vm.$nextTick()
    expect(calendar.classes()).toContain('ao-datepickercalendarday')
  })

  it('show next month', async () => {
    const calendar = mount(AoDatePickerCalendarDay, {
      propsData: {
        inputDate: '2018-02-01',
        monthNames,
        dayNames
      }
    })

    calendar.findAll('.ao-datepickercalendarday__header-action').at(1).trigger('click')
    await calendar.vm.$nextTick()
    expect(calendar.find('.ao-datepickercalendarday__date').text()).toContain('25')
  })

  it('show previous month', async () => {
    const calendar = mount(AoDatePickerCalendarDay, {
      propsData: {
        inputDate: '2018-02-01',
        monthNames,
        dayNames
      }
    })

    calendar.findAll('.ao-datepickercalendarday__header-action').at(0).trigger('click')
    await calendar.vm.$nextTick()
    expect(calendar.find('.ao-datepickercalendarday__date').text()).toContain('31')
  })

  it('select a date', async () => {
    const calendar = mount(AoDatePickerCalendarDay, {
      propsData: {
        inputDate: '2018-02-01',
        monthNames,
        dayNames
      }
    })

    calendar.findAll('.ao-datepickercalendarday__date').at(15).trigger('click')
    expect(calendar.emitted().selected).toEqual([['2018-02-12']])
  })
})
