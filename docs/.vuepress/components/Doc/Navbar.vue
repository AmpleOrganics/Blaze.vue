<template>
  <div>
    <div class="component-example">
      <ao-navbar>
        <li
          v-for="route in routes"
          :key="route.path">
          <router-link :to="route.path" >{{ route.name }}</router-link>
        </li>
      </ao-navbar>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      routes: [
        { path: '#examples', name: 'Examples' },
        { path: '#code-example', name: 'Code Example' },
        { path: '#props', name: 'Props' }
      ]
    }
  }
}
</script>
