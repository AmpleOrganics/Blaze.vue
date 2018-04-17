import Card from '@/components/AoCard.vue'

describe('Card', () => {
  it('defines title prop to be a string', () => {
    const cardTitle = Card.props.title
    expect(cardTitle.type.name).to.equal('String')
    expect(cardTitle.default).to.equal(null)
  })
})
