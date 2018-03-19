import Vue from 'vue'
import TextArea from '@/components/AoTextArea.vue'
import { expect } from 'chai'

function mountComponent (Component, options) {
  const Constructor = Vue.extend(Component)
  return new Constructor(options).$mount()
}

describe('TextArea', () => {
  it('has a value prop that has a default of null', () => {
    const value = TextArea.props.value
    expect(value.default).to.equal(null)
  })

  it('defines label prop to be a string', () => {
    const label = TextArea.props.label
    expect(label.type.name).to.equal('String')
    expect(label.default).to.equal(null)
  })

  it('defines name prop to be a string', () => {
    const name = TextArea.props.name
    expect(name.type.name).to.equal('String')
    expect(name.default).to.equal(null)
  })

  it('defines placeholder prop to be a string', () => {
    const placeholder = TextArea.props.placeholder
    expect(placeholder.type.name).to.equal('String')
    expect(placeholder.default).to.equal(null)
  })

  it('defines maxlength prop to be a number', () => {
    expect(TextArea.props.maxLength.type.name).to.equal('Number')
  })

  it('defines minlength prop to be a number', () => {
    expect(TextArea.props.maxLength.type.name).to.equal('Number')
  })

  it('defines required prop to be a string and to be false by default', () => {
    const required = TextArea.props.required
    expect(required.type.name).to.equal('Boolean')
    expect(typeof required.default).to.equal('boolean')
    expect(required.default).to.equal(false)
  })

  it('defines readonly prop to be a boolean and to be false by default', () => {
    const readonly = TextArea.props.readonly
    expect(readonly.type.name).to.equal('Boolean')
    expect(typeof readonly.default).to.equal('boolean')
    expect(readonly.default).to.equal(false)
  })

  it('defines disabled prop to be a boolean and to be false by default', () => {
    const disabled = TextArea.props.disabled
    expect(disabled.type.name).to.equal('Boolean')
    expect(typeof disabled.default).to.equal('boolean')
    expect(disabled.default).to.equal(false)
  })

  it('defines length prop to be a number', () => {
    const rows = TextArea.props.rows
    expect(rows.type.name).to.equal('Number')
  })

  it('renders with default values', () => {
    const textarea = mountComponent(TextArea, {
      propsData: {
        value: 'stuff',
        label: 'label'
      }
    })
    expect(textarea.value).to.equal('stuff')
    textarea.$el.querySelector('textarea').textContent = 'stuff'
  })
})
