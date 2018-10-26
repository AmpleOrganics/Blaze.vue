const invalidMessageSelector = '.ao-form-group__invalid-message'

export default {
  assert (wrapper) {
    expect(wrapper.contains(invalidMessageSelector)).toBe(true)
    expect(wrapper.find(invalidMessageSelector).text()).toBe('')

    wrapper.setProps({
      invalidMessage: 'invalid message'
    })
    expect(wrapper.find(invalidMessageSelector).text()).toBe('invalid message')
  }
}
