import { mount } from '@vue/test-utils'
import Badge from '@/components/AoBadge.vue'

describe('Badge', () => {
  it('create', () => {
    const badge = mount(Badge, {
      propsData: {
        text: 'test'
      }
    })
    expect(badge.text()).toBe('test')
    expect(badge.classes()).toContain('ao-badge')
  })

  it('success', () => {
    const badge = mount(Badge, {
      propsData: {
        text: 'test0',
        success: true
      }
    })
    expect(badge.text()).toBe('test0')
    expect(badge.classes()).toContain('ao-badge--success')
  })

  it('info', () => {
    const badge = mount(Badge, {
      propsData: {
        text: 'test1',
        info: true
      }
    })
    expect(badge.text()).toBe('test1')
    expect(badge.classes()).toContain('ao-badge--info')
  })

  it('subtle', () => {
    const badge = mount(Badge, {
      propsData: {
        text: 'test2',
        subtle: true
      }
    })
    expect(badge.text()).toBe('test2')
    expect(badge.classes()).toContain('ao-badge--subtle')
  })
})
