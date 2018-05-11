import FileUpload from '@/components/AoFileUpload.vue'
import {
  expect
} from 'chai'

describe('FileUpload', () => {
  it('defines label prop to be a string', () => {
    const label = FileUpload.props.label
    expect(label.type.name).to.equal('String')
    expect(label.default).to.equal(null)
    expect(label.required).to.equal(true)
  })

  it('defines name prop to be a string', () => {
    const name = FileUpload.props.name
    expect(name.type.name).to.equal('String')
    expect(name.default).to.equal(null)
  })

  it('defines required prop to be a boolean', () => {
    const required = FileUpload.props.required
    expect(required.type.name).to.equal('Boolean')
    expect(typeof required.default).to.equal('boolean')
    expect(required.default).to.equal(false)
  })

  it('defines disabled prop to be a boolean', () => {
    const disabled = FileUpload.props.disabled
    expect(disabled.type.name).to.equal('Boolean')
    expect(typeof disabled.default).to.equal('boolean')
    expect(disabled.default).to.equal(false)
  })

  it('defines hasError prop to be a boolean', () => {
    const hasError = FileUpload.props.hasError
    expect(hasError.type.name).to.equal('Boolean')
    expect(typeof hasError.default).to.equal('boolean')
    expect(hasError.default).to.equal(false)
  })

  it('defines showLabel prop to be a boolean', () => {
    const showLabel = FileUpload.props.showLabel
    expect(showLabel.type.name).to.equal('Boolean')
    expect(typeof showLabel.default).to.equal('boolean')
    expect(showLabel.default).to.equal(true)
  })

  it('defines updateFile as a function', () => {
    expect(typeof FileUpload.methods.updateFile).to.equal('function')
  })
})
