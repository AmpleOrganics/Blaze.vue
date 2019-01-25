<template>
  <td :class="computedClasses">
    <slot />
  </td>
</template>

<script>
import { filterClasses } from './utils/component_utilities.js'

export default {
  props: {
    content: {
      type: String,
      default: null
    },
    alignRight: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    computedClasses () {
      const activeClasses = {
        'ao-table-cell': true,
        'ao-table-cell--align-right': this.alignRight,
        'ao-table-cell__button': this.content === 'button',
        'ao-table-cell__input': this.content === 'input'
      }
      return filterClasses(activeClasses)
    }
  }
}
</script>

<style lang="scss">
.ao-table-cell {
  &__input {
    padding-top: $table-input-vertical-cell-padding !important;
    padding-bottom: $table-input-vertical-cell-padding !important;

    & .ao-input > .ao-form-control {
      height: $input-height-sm;
      padding: $spacer-micro/2 $spacer-micro;
      font-size: $font-size-sm;
    }

    & .ao-input > .ao-input__addon {
      height: $input-height-sm;
      padding: $spacer-micro/2 $spacer-sm/2;
      font-size: $font-size-sm;
    }

    & .ao-form-group {
      margin-bottom: 0;
    }
  }

  &__button {
    text-align: right;
    padding-top: $table-input-vertical-cell-padding !important;
    padding-bottom: $table-input-vertical-cell-padding !important;

    & .ao-button {
      color: $color-gray-30;
      background: transparent;
      border-color: transparent;
      box-shadow: $shadow-none;
      font-size: $font-size-base;
      min-height: auto;
      height: $input-height-sm;
      min-width: $input-height-sm;
      padding: $spacer-micro/2;
      font-weight: normal;

      &:hover:not([disabled]),
      &:focus:not([disabled]) {
        color: $color-gray-10;
        border-color: transparent;
        background: rgba(0,0,0,0.10);
      }

      &:active:not([disabled]),
      &:active:hover:not([disabled]) {
        background: rgba(0,0,0,0.15);
      }

      & > i {
        font-size: $md-icon-font-size-base;
      }
    }
  }

  &--align-right {
    text-align: right;
  }
}

</style>
