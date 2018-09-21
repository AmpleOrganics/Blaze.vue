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

  it('sortable', () => {
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
    const triggerSort = () => table.findAll('th').at(1).trigger('click')

    triggerSort()
    expect(table.emitted().sortTable[0]).toEqual([ 'first_name', 'desc' ])

    triggerSort()
    expect(table.emitted().sortTable[1]).toEqual([ 'first_name', 'asc' ])

    triggerSort()
    expect(table.emitted().sortTable[2]).toEqual([ 'first_name', 'desc' ])

    // no emit when sortable: false
    table.setProps({ headers: [
      { field: 'id', title: 'ID', sortable: false },
      { field: 'first_name', title: 'First Name', sortable: false }
    ] })
    triggerSort()
    expect(table.emitted().sortTable.length).toBe(3)
  })
})
