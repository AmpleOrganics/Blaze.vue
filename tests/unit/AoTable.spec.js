import Table from '@/components/AoTable.vue'
import { expect } from 'chai'

describe('Table', () => {
  it('defines headers to be a array', () => {
    expect(Table.props.headers.type.name).to.equal('Array')
    expect(Table.props.headers.required).to.equal(false)
  })
})
