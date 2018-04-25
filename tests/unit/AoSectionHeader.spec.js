import SectionHeader from '@/components/AoSectionHeader.vue'
import { expect } from 'chai'

describe('SectionHeader', () => {
  it('defines title prop to be a string', () => {
    const sectionHeaderTitle = SectionHeader.props.title
    expect(sectionHeaderTitle.type.name).to.equal('String')
    expect(sectionHeaderTitle.default).to.equal(null)
    expect(sectionHeaderTitle.required).to.equal(true)
  })

  it('defines iconHtml prop to be a string', () => {
    const iconHtml = SectionHeader.props.iconHtml
    expect(iconHtml.type.name).to.equal('String')
    expect(iconHtml.default).to.equal(null)
  })

  it('defines iconClass prop to be a string', () => {
    const iconClass = SectionHeader.props.iconClass
    expect(iconClass.type.name).to.equal('String')
    expect(iconClass.default).to.equal(null)
  })
})
