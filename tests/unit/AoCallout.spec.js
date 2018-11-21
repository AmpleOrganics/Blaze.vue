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

  it('is dismissible', () => {
    const callout = mount(Callout, {
      propsData: {
        dismissible: true,
        showCallout: true
      }
    })
    expect(callout.contains('ao-callout__dismiss-icon'))
  })

  it('has an icon', () => {
    const callout = mount(Callout, {
      propsData: {
        iconClass: 'glyphicon'
      }
    })
    expect(callout.contains('glyphicon'))
  })

  it('emits an update', () => {
    const callout = mount(Callout, {
      propsData: {
        dismissible: true
      }
    })
    callout.find('.ao-callout__dismiss-icon button').trigger('click')
    expect(callout.emitted()['hideCallout'][0][0]).toBeFalsy()
  })
})
