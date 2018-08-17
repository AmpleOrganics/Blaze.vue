<template>
  <div class="ao-breadcrumbs">
    <span
      v-for="({ name, path, active}, index) in paths"
      :key="index">
      <span v-if="!active">
        <router-link
          :to="path"
          class="ao-breadcrumbs__crumb">
          {{ name }}
        </router-link>
        <span class="ao-breadcrumbs__crumb-separator">{{ separator }}</span>
      </span>
      <span v-else>
        <span
          class="ao-breadcrumbs__crumb ao-breadcrumbs__crumb--active">
          {{ name }}
        </span>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    separator: {
      type: String,
      default: '/'
    },

    paths: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped="true">

@import '../_variables.scss';
.ao-breadcrumbs {
  margin-bottom: $spacer;

  &__crumb {
    text-transform: uppercase;
    color: $color-gray-30;
    text-decoration: none;
    font-size: $font-size-xs;

    &:not(&--active) {
      font-weight: $font-weight-bold;
    }

    &:not(&--active):hover {
      color: $color-gray-20;
    }
  }

  &__crumb-separator {
    font-size: $font-size-xs;
  }
}
</style>
