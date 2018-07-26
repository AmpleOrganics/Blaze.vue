import { mount } from '@vue/test-utils'
import Card from '@/components/AoCard.vue'

describe('Card', () => {
  it('create', () => {
    const card = mount(Card)
    expect(card.text()).toBe('')
    expect(card.classes()).toContain('ao-card')
  })

  it('title', () => {
    const card = mount(Card, {
      propsData: {
        title: 'test'
      }
    })
    expect(card.text()).toBe('test')
    expect(card.classes()).toContain('ao-card')
  })
})
