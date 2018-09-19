<template>
  <div class="layout">
    <div class="layout__header-toolbar">
      <ao-header-toolbar
        :title="title"
        fixed
        @click.native="$router.push('/')"/>
    </div>

    <div class="layout__container">
      <div class="layout__sidebar">
        <LayoutSidebar />
      </div>

      <div class="layout__content">
        <slot name="content">
          <h1 class="layout__header">
            {{ $route.meta && $route.meta.title }}
          </h1>

          <div class="layout__description">
            <slot name="description">description</slot>
          </div>

          <div class="layout__examples">
            <h2 class="layout__examples-header">Examples</h2>
            <slot name="example">example</slot>
          </div>

          <h2 class="layout__snippets-header">Code Examples</h2>
          <pre class="layout__snippets blaze-docs-code-snippet"><slot name="snippet">snippet</slot></pre>

          <h2 class="layout__api">Props</h2>
          <div>
            <slot name="api">api</slot>
          </div>
        </slot>
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
  methods: {
    onClick () {
      console.log('clicked')
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {

  &__container {
    display: flex;
    padding: $spacer;
    padding-top: $header-toolbar-height + $spacer-px;
  }

  &__sidebar {
    min-width: 10rem;
  }

  &__content {
    flex-grow: 1;
    max-width: 75rem;
    > * {
      margin-bottom: 1rem;
    }
  }

  &__examples-header {
    margin-bottom: 1rem;
  }

  &__header-toolbar {
    cursor: pointer;
  }
}
</style>
