<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    title: 'Blaze.vue Documentation'
  })
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Oxygen+Mono');

#router-container {
  padding: $spacer;
  padding-top: $header-toolbar-height + $spacer-px;
}

#app {
  .blaze-docs-code-snippet {
    background: $color-gray-90;
    color: $color-dark;
    font-size: 14px;
    border-radius: $border-radius-base;
    padding: $spacer;
    margin-bottom: $spacer;
    font-family: "Oxygen Mono", "Courier New", Courier, monospace;
  }
}
</style>
