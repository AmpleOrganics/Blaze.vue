<template>
  <div class="ao-section-header">
    <div class="ao-section-header__area">
      <span
        class="ao-section-header__icon"
        v-if="hasIcon"
        :class="iconClass"
        v-html="iconHtml"
      />
      <h1 class="ao-section-header__title">{{ title }}</h1>
      <div class="ao-section-header__toolbar">
        <slot name="section-header-toolbar"/>
      </div>
    </div>
    <slot name="section-header-navbar"/>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: null
    },

    iconHtml: {
      type: String,
      default: null
    },

    iconClass: {
      type: String,
      default: null
    }
  },

  computed: {
    hasIcon () {
      return this.iconHtml || this.iconClass
    }
  }
}
</script>

<style lang='scss' scoped>

.ao-section-header {
  background-color: $color-white;
  border: 1px solid $color-gray-60;
  border-radius: $border-radius-base;
  padding: 0;
  margin-bottom: $spacer;

  &__area {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: $spacer;
  }

  &__icon {
    line-height: 1.1;
    font-size: $font-size-xl;
    color: $color-ao-primary;
    margin: 0 $spacer-sm 0 0;
  }

  &__title {
    margin: 0;
    font-size: $font-size-xl;
    font-weight: $font-weight-light;
  }

  &__toolbar {
    margin-left: auto;

    & .form-group {
      display: inline-block;
    }

    & * {
      margin-left: $spacer-sm;
    }
  }

  &__navbar {
    padding-left: $spacer;
    padding-right: $spacer;
    padding-bottom: $spacer;
  }
}
</style>
