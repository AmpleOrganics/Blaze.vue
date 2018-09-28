<template>
  <div class="ao-breadcrumbs">
    <div
      v-for="({ name, path, active}, index) in paths"
      :key="index"
      class="ao-breadcrumbs__crumb-group">
      <router-link
        v-if="!active"
        :to="path"
        class="ao-breadcrumbs__crumb">
        {{ name }}
      </router-link>
      <span
        v-if="active"
        class="ao-breadcrumbs__crumb ao-breadcrumbs__crumb--active">
        {{ name }}
      </span>
      <span
        v-if="ifSeparator(index)"
        class="ao-breadcrumbs__crumb-separator">
        {{ separator }}
      </span>
    </div>
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
  },

  methods: {
    ifSeparator (index) {
      return index + 1 !== this.paths.length
    }
  }
}
</script>

<style lang="scss">
.ao-breadcrumbs {
  margin-bottom: $spacer;
  display: flex;

  &__crumb-group {
    display: flex;
  }

  &__crumb {
    text-decoration: none;
    font-size: $font-size-xs;
    text-transform: uppercase;

    &--active {
      color: $color-gray-30;
    }

    &:not(&--active):hover {
      text-decoration: underline;
    }
  }

  &__crumb-separator {
    font-size: $font-size-xs;
    margin-left: $spacer-micro;
    margin-right: $spacer-micro;
    color: $color-gray-30;
  }
}
</style>
