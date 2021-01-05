const instructionSelector = '.ao-form-group__instruction-text'

export default {
  async assert (wrapper) {
    expect(wrapper.find(instructionSelector).exists()).toBe(false)

    wrapper.setProps({ instructionText: 'instruction' })
    await wrapper.vm.$nextTick()
    expect(wrapper.find(instructionSelector).text()).toBe('instruction')
  }
}
