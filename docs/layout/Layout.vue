<template>
  <div class="layout">
    <div class="layout__header-toolbar">
      <ao-header-toolbar
        :title="title"
        :title-clicked="titleClicked"
        fixed/>
    </div>

    <div class="layout__container">
      <div class="layout__sidebar-container">
        <div class="layout__sidebar">
          <LayoutSidebar />
        </div>
      </div>

      <div class="layout__content-container">
        <ao-card
          :title="$route.meta && $route.meta.title"
          class="layout__content">
          <slot name="content">

            <div class="layout__section layout__description">
              <slot name="description">description</slot>
            </div>

            <div class="layout__section layout__examples">
              <h2>Examples</h2>
              <slot name="example">example</slot>
            </div>

            <div class="layout__section">
              <h2>Code Examples</h2>
              <pre class="layout__section layout__snippets blaze-docs-code-snippet"><slot name="snippet">snippet</slot></pre>
            </div>

            <div class="layout__section">
              <h2>Props</h2>
              <slot name="api">api</slot>
            </div>

            <div
              v-if="isEventsSectionVisible"
              class="layout__section">
              <h2>Events</h2>
              <slot name="events"/>
            </div>
          </slot>
        </ao-card>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutSidebar from './LayoutSidebar'

export default {
  components: {
    LayoutSidebar
  },
  data: () => ({
    title: 'Blaze Documentation'
  }),
  computed: {
    isEventsSectionVisible () {
      return Object.keys(this.$slots).includes('events')
    }
  },
  methods: {
    titleClicked () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__container {
    display: flex;
    width: 100%;
    max-width: 1170px;
    margin-right: auto;
  }

  &__sidebar-container {
    width: 25%;
    padding: $spacer;
    padding-top: $header-toolbar-height + $spacer-px;
  }

  &__content-container {
    width: 75%;
    max-width: 75rem;
    padding: $spacer;
    padding-top: $header-toolbar-height + $spacer-px;
    > * {
      margin-bottom: 1rem;
    }
  }

  &__section {
    margin-bottom: $spacer * 3;
  }

  &__description {
    color: $color-gray-30;
    font-size: $font-size-lg;
  }

  .component-example {
    background: $color-gray-90;
    border-radius: $border-radius-base;
    padding: $spacer;
    margin-bottom: $spacer;
  }
}
</style>
