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
    expect(table.findAll('.ao-table__header').at(0).html()).toContain('ID')
    expect(table.findAll('.ao-table__header').at(1).html()).toContain('First Name')
    expect(table.findAll('.ao-table__header').at(2).html()).toContain('Last Name')
    expect(table.findAll('.ao-table__header').at(3).html()).toContain('Gender')
  })

  it('sorts', () => {
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

    table.findAll('th').at(1).trigger('click')
    expect(table.vm._data.sortProxy).toBe('first_name')
    expect(table.vm._data.lastSelectedHeader).toBe('first_name')
    expect(table.vm._data.orderProxy).toBe('desc')
    table.findAll('th').at(1).trigger('click')
    expect(table.vm._data.sortProxy).toBe('first_name')
    expect(table.vm._data.lastSelectedHeader).toBe('first_name')
    expect(table.vm._data.orderProxy).toBe('asc')
  })
})
