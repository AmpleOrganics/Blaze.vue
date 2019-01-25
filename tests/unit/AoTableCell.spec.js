import { mount } from '@vue/test-utils'
import TableCell from '@/components/AoTableCell.vue'

describe('TableCell', () => {
  it('create', () => {
    const tableCell = mount(TableCell)
    expect(tableCell.classes()).toContain('ao-table-cell')
  })

  it('input', () => {
    const tableCell = mount(TableCell, {
      propsData: {
        content: 'input'
      }
    })
    expect(tableCell.classes()).toContain('ao-table-cell')
    expect(tableCell.classes()).toContain('ao-table-cell__input')
  })

  it('button', () => {
    const tableCell = mount(TableCell, {
      propsData: {
        content: 'button'
      }
    })
    expect(tableCell.classes()).toContain('ao-table-cell')
    expect(tableCell.classes()).toContain('ao-table-cell__button')
  })

  it('align-right', () => {
    const tableCell = mount(TableCell, {
      propsData: {
        alignRight: true
      }
    })
    expect(tableCell.classes()).toContain('ao-table-cell')
    expect(tableCell.classes()).toContain('ao-table-cell--align-right')
  })
})
