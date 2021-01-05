const invalidMessageSelector = '.ao-form-group__invalid-message'

export default {
  async assert (wrapper) {
    expect(wrapper.find(invalidMessageSelector).exists()).toBe(true)
    expect(wrapper.find(invalidMessageSelector).text()).toBe('')

    wrapper.setProps({
      invalidMessage: 'invalid message'
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.find(invalidMessageSelector).text()).toBe('invalid message')
  }
}
