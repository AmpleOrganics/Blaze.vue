import { mount } from '@vue/test-utils'
import Button from '@/components/AoButton.vue'

describe('Button', () => {
  it('create', () => {
    const button = mount(Button)
    expect(button.classes()).toContain('ao-button')
  })

  it('small', () => {
    const button = mount(Button, {
      propsData: {
        small: true
      }
    })
    expect(button.classes()).toContain('ao-button--small')
  })

  it('large', () => {
    const button = mount(Button, {
      propsData: {
        large: true
      }
    })
    expect(button.classes()).toContain('ao-button--large')
  })

  it('primary', () => {
    const button = mount(Button, {
      propsData: {
        primary: true
      }
    })
    expect(button.classes()).toContain('ao-button--primary')
  })

  it('destructive', () => {
    const button = mount(Button, {
      propsData: {
        destructive: true
      }
    })
    expect(button.classes()).toContain('ao-button--destructive')
  })

  it('caution', () => {
    const button = mount(Button, {
      propsData: {
        caution: true
      }
    })
    expect(button.classes()).toContain('ao-button--caution')
  })

  it('subtle', () => {
    const button = mount(Button, {
      propsData: {
        subtle: true
      }
    })
    expect(button.classes()).toContain('ao-button--subtle')
  })

  it('naked', () => {
    const button = mount(Button, {
      propsData: {
        naked: true
      }
    })
    expect(button.classes()).toContain('ao-button--naked')
  })

  it('jumbo', () => {
    const button = mount(Button, {
      propsData: {
        jumbo: true
      }
    })
    expect(button.classes()).toContain('ao-button--jumbo')
  })

  it('link', () => {
    const button = mount(Button, {
      propsData: {
        link: true
      }
    })
    expect(button.classes()).toContain('ao-button--link')
  })

  it('textOnly', () => {
    const button = mount(Button, {
      propsData: {
        textOnly: true
      }
    })
    expect(button.classes()).toContain('ao-button--text-only')
  })
})
