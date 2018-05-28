import Badge from '@/components/AoBadge.vue'
import { expect } from 'chai'

describe('Badge', () => {
  it('defines text prop to be valid and to default to null', () => {
    const text = Badge.props.text
    expect(text.type.name).to.equal('String')
    expect(typeof text.default).to.equal('string')
    expect(text.default).to.equal(null)
    expect(text.required).to.equal(true)
  })

  it('defines success prop to be a boolean and to default to false', () => {
    const success = Badge.props.success
    expect(success.type.name).to.equal('Boolean')
    expect(typeof success.default).to.equal('boolean')
    expect(success.default).to.equal(false)
  })
  
  it('defines info prop to be a boolean and to default to false', () => {
    const info = Badge.props.info
    expect(info.type.name).to.equal('Boolean')
    expect(typeof info.default).to.equal('boolean')
    expect(info.default).to.equal(false)
  })

  it('defines subtle prop to be a boolean and to default to false', () => {
    const subtle = Badge.props.subtle
    expect(subtle.type.name).to.equal('Boolean')
    expect(typeof subtle.default).to.equal('boolean')
    expect(subtle.default).to.equal(false)
  })
})
