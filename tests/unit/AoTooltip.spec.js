import { mount } from '@vue/test-utils'
import Tooltip from '@/components/AoTooltip.vue'

describe('AoTooltip', () => {
  it('create', () => {
    const tooltip = mount(Tooltip, {
      propsData: {
        text: 'tooltip'
      }
    })
    expect(tooltip.classes()).toContain('ao-tooltip')
    expect(tooltip.classes()).toContain('ao-tooltip--bottom')
    expect(tooltip.find('.ao-tooltip__text').text()).toBe('tooltip')
  })

  it('position', () => {
    const tooltip = mount(Tooltip, {
      propsData: {
        text: 'tooltip',
        position: 'top'
      }
    })
    expect(tooltip.classes()).toContain('ao-tooltip--top')
  })

  it('multiline', () => {
    const tooltip = mount(Tooltip, {
      propsData: {
        text: 'tooltip',
        multiline: true
      }
    })
    expect(tooltip.classes()).toContain('ao-tooltip--multiline')
  })
})
