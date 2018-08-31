import { mount } from '@vue/test-utils'
import Heading from '@/components/AoHeading.vue'

describe('Heading', () => {
  it('create', () => {
    const heading = mount(Heading, {
      propsData: {
        text: 'heading'
      }
    })
    expect(heading.text()).toBe('heading')
  })

  it('create', () => {
    const cardSectionHeadingClass = 'ao-heading--card-section-heading'

    const heading = mount(Heading, {
      propsData: {
        text: 'heading'
      }
    })
    expect(heading.classes()).not.toContain(cardSectionHeadingClass)

    heading.setProps({ cardSectionHeading: true })
    expect(heading.classes()).toContain(cardSectionHeadingClass)
  })
})
