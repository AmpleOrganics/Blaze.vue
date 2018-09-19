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
#router-container {
  padding: $spacer;
  padding-top: $header-toolbar-height + $spacer-px;
}

#app {
  .blaze-docs-code-snippet {
    border: 0.25rem solid black;
    background: black;
    color: white;
    border-radius: 0.5rem;
    padding: 1rem;
    margin: 1rem 0;
    font-family: "Courier New", Courier, monospace;
  }
}
</style>
