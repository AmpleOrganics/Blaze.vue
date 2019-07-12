import { mount } from '@vue/test-utils'
import Table from '@/components/AoTable.vue'

describe('Table', () => {
  it('create', () => {
    const table = mount(Table, {
      propsData: {
        headers: [
          { field: 'id', title: 'ID' },
          { field: 'first_name', title: 'First Name' },
          { field: 'last_name', title: 'Last Name' },
          { field: 'gender', title: 'Gender' }
        ]
      }
    })
    expect(table.classes()).toContain('ao-table')
  })

  it('headers', () => {
    const table = mount(Table, {
      propsData: {
        headers: [
          { field: 'id', title: 'ID' },
          { field: 'first_name', title: 'First Name' },
          { field: 'last_name', title: 'Last Name' },
          { field: 'gender', title: 'Gender' }
        ]
      }
    })
    expect(
      table
        .findAll('.ao-table__header')
        .at(0)
        .html()
    ).toContain('ID')
    expect(
      table
        .findAll('.ao-table__header')
        .at(1)
        .html()
    ).toContain('First Name')
    expect(
      table
        .findAll('.ao-table__header')
        .at(2)
        .html()
    ).toContain('Last Name')
    expect(
      table
        .findAll('.ao-table__header')
        .at(3)
        .html()
    ).toContain('Gender')
  })

  it('sortable', () => {
    const table = mount(Table, {
      propsData: {
        headers: [
          { field: 'id', title: 'ID' },
          { field: 'first_name', title: 'First Name', hidden: false },
          { field: 'last_name', title: 'Last Name' },
          { field: 'gender', title: 'Gender' }
        ]
      }
    })
    const triggerSort = () =>
      table
        .findAll('th')
        .at(1)
        .find('span')
        .trigger('click')

    triggerSort()
    expect(table.emitted().sortTable[0]).toEqual(['first_name', 'desc'])

    triggerSort()
    expect(table.emitted().sortTable[1]).toEqual(['first_name', 'asc'])

    triggerSort()
    expect(table.emitted().sortTable[2]).toEqual(['first_name', 'desc'])

    // no emit when sortable: false
    table.setProps({
      headers: [
        { field: 'id', title: 'ID', sortable: false },
        { field: 'first_name', title: 'First Name', sortable: false, hidden: false }
      ]
    })
    triggerSort()

    table.setProps({
      headers: [
        { field: 'id', title: 'ID', sortable: false },
        { field: 'first_name', title: 'First Name', sortable: true, hidden: false }
      ]
    })
    triggerSort()

    table.setProps({
      headers: [
        { field: 'id', title: 'ID', sortable: false },
        { field: 'first_name', title: 'First Name', sortable: false, hidden: true }
      ]
    })
    triggerSort()

    table.setProps({
      headers: [
        { field: 'id', title: 'ID', sortable: false },
        { field: 'first_name', title: 'First Name', hidden: true }
      ]
    })
    triggerSort()

    table.setProps({
      headers: [
        { field: 'id', title: 'ID', sortable: false },
        { field: 'first_name', title: 'First Name' }
      ]
    })
    triggerSort()

    table.setProps({
      headers: [
        { field: 'id', title: 'ID', sortable: false },
        { field: 'first_name', title: 'First Name', sortable: true, hidden: true }
      ]
    })
    triggerSort()

    expect(table.emitted().sortTable.length).toBe(5)
  })

  it('tooltip', () => {
    const tooltip = '.ao-table__tooltip-icon'
    const table = mount(Table, {
      propsData: {
        headers: [
          { field: 'field', title: 'Table Header', sortable: true, tooltip: { text: 'Tooltip Text', multiline: false, position: 'top' } }
        ]
      }
    })
    expect(
      table
        .find(tooltip)
        .isVisible()
    )
  })

  it('nodata', () => {
    const noDataSelector = '.ao-table__nodata'
    const table = mount(Table, {
      propsData: {
        headers: [
          { field: 'id', title: 'ID' },
          { field: 'first_name', title: 'First Name' },
          { field: 'last_name', title: 'Last Name' },
          { field: 'gender', title: 'Gender' }
        ]
      }
    })

    expect(table.contains(noDataSelector)).toBe(false)

    table.setProps({ showNoDataText: true })
    expect(table.contains(noDataSelector)).toBe(true)
    expect(table.find(noDataSelector).text()).toBe('')

    table.setProps({ showNoDataText: true, noDataText: 'test' })
    expect(table.find(noDataSelector).text()).toBe('test')
  })

  it('aligns header to right side when populated', () => {
    const table = mount(Table, {
      propsData: {
        headers: [
          { field: 'id', title: 'ID', alignRight: true },
          { field: 'first_name', title: 'First Name' },
          { field: 'last_name', title: 'Last Name' },
          { field: 'gender', title: 'Gender' }
        ]
      }
    })

    expect(
      table
        .findAll('.ao-table__header')
        .at(0)
        .classes()
    ).toContain('ao-table__header--text-right')

    expect(
      table
        .findAll('.ao-table__header')
        .at(1)
        .classes()
    ).not.toContain('ao-table__header--text-right')
  })

  it('hides header if hidden attribute is added', () => {
    const table = mount(Table, {
      propsData: {
        headers: [
          { field: 'id', title: 'ID', hidden: true },
          { field: 'first_name', title: 'First Name' },
          { field: 'last_name', title: 'Last Name' },
          { field: 'gender', title: 'Gender' }
        ]
      }
    })

    expect(
      table
        .findAll('.ao-table__header')
        .at(0)
        .find('.ao-table__header-text')
        .isVisible()
    ).toBe(false)

    expect(
      table
        .findAll('.ao-table__header')
        .at(1)
        .find('.ao-table__header-text')
        .isVisible()
    ).toBe(true)
  })
})
