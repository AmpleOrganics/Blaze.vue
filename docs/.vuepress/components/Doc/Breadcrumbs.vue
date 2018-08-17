<template>
  <div class="component-example">
    <ao-breadcrumbs :paths="paths"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      paths: [
        { name: 'Home', path: '/' },
        { name: 'Somewhere', path: '/components/Badge.html' },
        { name: 'Current', active: true }
      ]
    }
  }
}
</script>
