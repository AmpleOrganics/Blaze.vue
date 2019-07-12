<template>
  <div class="ao-card">
    <div
      v-if="title"
      class="ao-card__header"
    >
      <h2 class="ao-card__title">
        {{ title }}
        <slot name="card-header-action" />
      </h2>
      <div class="ao-card__toolbar">
        <slot name="card-header-toolbar" />
      </div>
    </div>
    <div class="ao-card__callout">
      <slot name="card-callout" />
    </div>
    <div class="ao-card__body">
      <slot />
    </div>
    <div
      v-if="!!this.$slots.cardFooter"
      class="ao-card__footer"
    >
      <slot name="cardFooter" />
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

<style lang='scss'>

.ao-card {
  background-color: $color-white;
  border: 1px solid $ui-border-color-base;
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
    border-bottom: 1px solid $ui-border-color-base;
  }

  &__footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    padding: $spacer;
    border-top: 1px solid $ui-border-color-base;

    & .form-group {
      display: inline-block;
      margin-bottom: 0;
    }

    & > * {
      margin-left: $spacer-sm;
      margin-bottom: 0 !important;
    }
  }

  &__title {
    margin: 0;
    font-size: $font-size-xl;
    font-weight: $font-weight-light;
    display: inline-block;

    & > * {
      vertical-align: bottom;
    }
  }

  &__toolbar {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    & .form-group {
      display: inline-block;
      margin-bottom: 0;
    }

    & > * {
      margin-left: $spacer-sm;
      margin-bottom: 0 !important;
    }
  }

  &__callout .ao-callout {
    margin-bottom: 0;
  }
}
</style>
