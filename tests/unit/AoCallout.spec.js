import { mount } from '@vue/test-utils'
import Callout from '@/components/AoCallout.vue'

describe('Callout', () => {
  it('create', () => {
    const callout = mount(Callout)
    expect(callout.classes()).toContain('ao-callout')
  })

  it('info', () => {
    const callout = mount(Callout, {
      propsData: {
        info: true
      }
    })
    expect(callout.classes()).toContain('ao-callout--info')
  })

  it('success', () => {
    const callout = mount(Callout, {
      propsData: {
        success: true
      }
    })
    expect(callout.classes()).toContain('ao-callout--success')
  })

  it('caution', () => {
    const callout = mount(Callout, {
      propsData: {
        caution: true
      }
    })
    expect(callout.classes()).toContain('ao-callout--caution')
  })

  it('destructive', () => {
    const callout = mount(Callout, {
      propsData: {
        destructive: true
      }
    })
    expect(callout.classes()).toContain('ao-callout--destructive')
  })
})
