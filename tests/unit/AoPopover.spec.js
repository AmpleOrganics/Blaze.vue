import { mount } from '@vue/test-utils'
import Popover from '@/components/AoPopover.vue'

describe('AoPopover', () => {
  it('create', () => {
    const popover = mount(Popover, {
      propsData: {
        text: 'popover'
      }
    })
    expect(popover.classes()).toContain('ao-popover')
    expect(popover.classes()).toContain('ao-popover--bottom')
    expect(popover.find('.ao-popover__text').text()).toBe('popover')
  })

  it('position', () => {
    const popover = mount(Popover, {
      propsData: {
        text: 'popover',
        position: 'top'
      }
    })
    expect(popover.classes()).toContain('ao-popover--top')
  })
})
