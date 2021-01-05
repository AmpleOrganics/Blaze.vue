import clickOutside from '@/directives/click-outside'
import { shallowMount, createLocalVue } from '@vue/test-utils'

describe('directives/clickOutside', () => {
  it('should be able to bind', async () => {
    const foo = jest.fn()
    const localVue = createLocalVue()
    localVue.directive('clickOutside', clickOutside)

    const wrapper = shallowMount(
      {
        template: `<div>
        <h1 class="header"></h1>
        <button v-click-outside="foo">button</button>
      </div>`,
        methods: {
          foo
        }
      },
      {
        localVue,
        attachToDocument: true // replace with `attachTo: document.body` once 1.1.1 or whatever is released: https://github.com/vuejs/vue-test-utils/issues/1578
      }
    )

    wrapper.find('button').trigger('click')

    wrapper.find('.header').trigger('click')
    wrapper.destroy()

    expect(foo).toHaveBeenCalled()
  })
})
