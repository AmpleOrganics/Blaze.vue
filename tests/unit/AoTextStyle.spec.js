import TextStyle from '@/components/AoTextStyle.vue'
import { expect } from 'chai'

describe('TextStyle', () => {
  it('defines error prop to be a boolean and to default to false', () => {
    const error = TextStyle.props.error
    expect(error.type.name).to.equal('Boolean')
    expect(typeof error.default).to.equal('boolean')
    expect(error.default).to.equal(false)
  })

  it('defines small prop to be a boolean and to default to false', () => {
    const small = TextStyle.props.small
    expect(small.type.name).to.equal('Boolean')
    expect(typeof small.default).to.equal('boolean')
    expect(small.default).to.equal(false)
  })
})
