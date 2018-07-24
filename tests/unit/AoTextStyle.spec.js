import { mount } from '@vue/test-utils'
import TextStyle from '@/components/AoTextStyle.vue'

describe('TextStyle', () => {
  it('create', () => {
    const textStyle = mount(TextStyle)

    expect(textStyle.classes()).toContain('ao-text')
  })

  it('small', () => {
    const textStyle = mount(TextStyle, {
      propsData: {
        error: true
      }
    })

    expect(textStyle.classes()).toContain('ao-text--error')
  })

  it('small', () => {
    const textStyle = mount(TextStyle, {
      propsData: {
        small: true
      }
    })

    expect(textStyle.classes()).toContain('ao-text--small')
  })
})
