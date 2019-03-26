import { startOfMonth, addDays, getDate, getDay, isSunday, subDays, getMonth, isToday, isEqual, format } from 'date-fns'
const dateRegex = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/

export function filterClasses (classes) {
  return Object.keys(classes).filter(className => classes[className])
}

export function isValidDate (value) {
  return dateRegex.test(value)
}

export function getCalendarDatesForMonth (dateValue, inputDate) {
  const dates = []

  if (dateValue) {
    let startDate = startOfMonth(dateValue)
    if (!isSunday(startDate)) {
      startDate = subDays(startDate, getDay(startDate))
    }

    // 42 days = 6 weeks
    for (let index = 0; index < 42; index += 1) {
      const calendarDate = addDays(startDate, index)
      const day = getDay(calendarDate)
      const date = getDate(calendarDate)
      const month = getMonth(calendarDate)

      dates.push({
        key: `${date}-${month}`,
        day,
        date,
        month,
        today: isToday(calendarDate),
        selected: isEqual(calendarDate, inputDate),
        value: format(calendarDate, 'YYYY-MM-DD')
      })
    }
  }

  return dates
}
