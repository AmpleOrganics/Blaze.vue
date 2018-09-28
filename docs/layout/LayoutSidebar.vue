<template>
  <ao-card class="layoutsidebar">
    <nav>
      <ao-heading
        card-section-heading
        text="Components"/>
      <ul>
        <li
          v-for="route in componentRoutes"
          :key="route.name"
          class="layoutsidebar__item">
          <router-link
            :to="route.name"
            class="layoutsidebar__item-link">{{ route.meta.title }}</router-link>
        </li>
      </ul>
    </nav>
  </ao-card>
</template>

<script>
export default {
  computed: {
    componentRoutes () {
      return this.$router.options.routes.filter(
        route => route.meta && route.meta.title
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.layoutsidebar {

  &__item {
    margin: 0.5rem 0;
  }

  &__item-link {
    text-decoration: none;
  }

  .router-link-active {
    font-weight: 700;
  }
}
</style>
