import { isValidDate, getCalendarDatesForMonth } from '@/components/utils/component_utilities'

describe('utils/component_utilities', () => {
  it('isValidDate', () => {
    expect(isValidDate('2018-01-01')).toBe(true)
    expect(isValidDate('20018-01-01')).toBe(false)
    expect(isValidDate('2008-001-01')).toBe(false)
    expect(isValidDate('2018-01-001')).toBe(false)
    expect(isValidDate('2018-1-01')).toBe(false)
    expect(isValidDate('2018-1-1')).toBe(false)
  })

  it('getCalendarDatesForMonth', () => {
    const expectedResult = [
      { date: 28, day: 0, key: '28-0', month: 0, selected: false, today: false, value: '2018-01-28' },
      { date: 29, day: 1, key: '29-0', month: 0, selected: false, today: false, value: '2018-01-29' },
      { date: 30, day: 2, key: '30-0', month: 0, selected: false, today: false, value: '2018-01-30' },
      { date: 31, day: 3, key: '31-0', month: 0, selected: false, today: false, value: '2018-01-31' },
      { date: 1, day: 4, key: '1-1', month: 1, selected: true, today: false, value: '2018-02-01' },
      { date: 2, day: 5, key: '2-1', month: 1, selected: false, today: false, value: '2018-02-02' },
      { date: 3, day: 6, key: '3-1', month: 1, selected: false, today: false, value: '2018-02-03' },
      { date: 4, day: 0, key: '4-1', month: 1, selected: false, today: false, value: '2018-02-04' },
      { date: 5, day: 1, key: '5-1', month: 1, selected: false, today: false, value: '2018-02-05' },
      { date: 6, day: 2, key: '6-1', month: 1, selected: false, today: false, value: '2018-02-06' },
      { date: 7, day: 3, key: '7-1', month: 1, selected: false, today: false, value: '2018-02-07' },
      { date: 8, day: 4, key: '8-1', month: 1, selected: false, today: false, value: '2018-02-08' },
      { date: 9, day: 5, key: '9-1', month: 1, selected: false, today: false, value: '2018-02-09' },
      { date: 10, day: 6, key: '10-1', month: 1, selected: false, today: false, value: '2018-02-10' },
      { date: 11, day: 0, key: '11-1', month: 1, selected: false, today: false, value: '2018-02-11' },
      { date: 12, day: 1, key: '12-1', month: 1, selected: false, today: false, value: '2018-02-12' },
      { date: 13, day: 2, key: '13-1', month: 1, selected: false, today: false, value: '2018-02-13' },
      { date: 14, day: 3, key: '14-1', month: 1, selected: false, today: false, value: '2018-02-14' },
      { date: 15, day: 4, key: '15-1', month: 1, selected: false, today: false, value: '2018-02-15' },
      { date: 16, day: 5, key: '16-1', month: 1, selected: false, today: false, value: '2018-02-16' },
      { date: 17, day: 6, key: '17-1', month: 1, selected: false, today: false, value: '2018-02-17' },
      { date: 18, day: 0, key: '18-1', month: 1, selected: false, today: false, value: '2018-02-18' },
      { date: 19, day: 1, key: '19-1', month: 1, selected: false, today: false, value: '2018-02-19' },
      { date: 20, day: 2, key: '20-1', month: 1, selected: false, today: false, value: '2018-02-20' },
      { date: 21, day: 3, key: '21-1', month: 1, selected: false, today: false, value: '2018-02-21' },
      { date: 22, day: 4, key: '22-1', month: 1, selected: false, today: false, value: '2018-02-22' },
      { date: 23, day: 5, key: '23-1', month: 1, selected: false, today: false, value: '2018-02-23' },
      { date: 24, day: 6, key: '24-1', month: 1, selected: false, today: false, value: '2018-02-24' },
      { date: 25, day: 0, key: '25-1', month: 1, selected: false, today: false, value: '2018-02-25' },
      { date: 26, day: 1, key: '26-1', month: 1, selected: false, today: false, value: '2018-02-26' },
      { date: 27, day: 2, key: '27-1', month: 1, selected: false, today: false, value: '2018-02-27' },
      { date: 28, day: 3, key: '28-1', month: 1, selected: false, today: false, value: '2018-02-28' },
      { date: 1, day: 4, key: '1-2', month: 2, selected: false, today: false, value: '2018-03-01' },
      { date: 2, day: 5, key: '2-2', month: 2, selected: false, today: false, value: '2018-03-02' },
      { date: 3, day: 6, key: '3-2', month: 2, selected: false, today: false, value: '2018-03-03' },
      { date: 4, day: 0, key: '4-2', month: 2, selected: false, today: false, value: '2018-03-04' },
      { date: 5, day: 1, key: '5-2', month: 2, selected: false, today: false, value: '2018-03-05' },
      { date: 6, day: 2, key: '6-2', month: 2, selected: false, today: false, value: '2018-03-06' },
      { date: 7, day: 3, key: '7-2', month: 2, selected: false, today: false, value: '2018-03-07' },
      { date: 8, day: 4, key: '8-2', month: 2, selected: false, today: false, value: '2018-03-08' },
      { date: 9, day: 5, key: '9-2', month: 2, selected: false, today: false, value: '2018-03-09' },
      { date: 10, day: 6, key: '10-2', month: 2, selected: false, today: false, value: '2018-03-10' }
    ]

    expect(getCalendarDatesForMonth('2018-02-28', '2018-02-01')).toEqual(expectedResult)
    expect(getCalendarDatesForMonth('2018-04-01', '')).toBeTruthy()
    expect(getCalendarDatesForMonth(null, null)).toEqual([])
  })
})
