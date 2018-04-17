<template>
  <div class="ao-card">
    <div class="ao-card__header" v-if="title">
      <h2 class="ao-card__title">{{ title }}</h2>
      <div class="ao-card__header__toolbar">
        <slot name="card-header-toolbar"/>
      </div>
    </div>
    <div class="ao-card__body">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang='scss' scoped>
$border-card-base: 1px solid $color-gray-60;

.ao-card {
  background-color: #fff;
  border: $border-card-base;
  border-radius: $border-radius-base;
  margin-bottom: $spacer;
  padding: 0;

  &__body {
    padding: $spacer;
  }

  &__header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border-bottom: $border-card-base;

    &__toolbar {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      & .form-group {
        display: inline-block;
      }

      & > * {
        margin-left: $spacer-sm;
        margin-bottom: 0 !important;
      }
    }
  }

  &__title {
    margin: 0;
    font-size: $font-size-xl;
    font-weight: $font-weight-light;
    display: inline-block;
  }
}
</style>
