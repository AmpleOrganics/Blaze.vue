const instructionSelector = '.ao-form-group__instruction-text'

export default {
  assert (wrapper) {
    expect(wrapper.contains(instructionSelector)).toBe(false)

    wrapper.setProps({ instructionText: 'instruction' })
    expect(wrapper.find(instructionSelector).text()).toBe('instruction')
  }
}
