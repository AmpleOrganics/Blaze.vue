import { mount } from '@vue/test-utils'
import SectionHeader from '@/components/AoSectionHeader.vue'

describe('SectionHeader', () => {
  it('create', () => {
    const sectionHeader = mount(SectionHeader, {
      propsData: {
        title: 'Test',
        subtitle: 'Test'
      }
    })
    expect(sectionHeader.text()).toBe('Test  Test')
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
    expect(sectionHeader.contains('.custom-glyph-clients')).toBe(true)
  })
})
