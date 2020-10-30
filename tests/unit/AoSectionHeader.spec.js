import { mount } from '@vue/test-utils'
import SectionHeader from '@/components/AoSectionHeader.vue'

describe('SectionHeader', () => {
  it('create', () => {
    const sectionHeader = mount(SectionHeader, {
      propsData: {
        title: 'Title',
        subtitle: 'Subtitle'
      }
    })
    // expect(sectionHeader.text()).toBe('Test \n Test')
    expect(sectionHeader.find('.ao-section-header__title').text()).toContain('Title')
    expect(sectionHeader.find('.ao-section-header__subtitle').text()).toContain('Subtitle')
    expect(sectionHeader.classes()).toContain('ao-section-header')
  })

  it('iconClass', () => {
    const sectionHeader = mount(SectionHeader, {
      propsData: {
        title: 'Test',
        subtitle: 'Test',
        iconClass: 'custom-glyph-clients'
      }
    })
    expect(sectionHeader.find('.custom-glyph-clients').exists()).toBe(true)
  })
})
