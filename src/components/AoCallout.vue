<template>
  <div :class="[computedClasses, 'ao-callout']">
    <div>
      <i
        v-if="iconClass"
        :class="[iconClass, 'ao-callout__icon']"
      />
    </div>
    <div class="ao-callout__body">
      <slot />
    </div>
    <div class="ao-callout__dismiss-icon">
      <button
        v-if="dismissible"
        @click="dismissCallout"
      >
        <i class="md-icon__close" />
      </button>
    </div>
  </div>
</template>

<script>
import { filterClasses } from './utils/component_utilities.js'
export default {
  props: {
    info: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    },
    caution: {
      type: Boolean,
      default: false
    },
    destructive: {
      type: Boolean,
      default: false
    },
    iconClass: {
      type: String,
      default: null
    },
    dismissible: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    computedClasses () {
      const computedClasses = {
        'ao-callout--info': this.info,
        'ao-callout--success': this.success,
        'ao-callout--caution': this.caution,
        'ao-callout--destructive': this.destructive
      }
      return filterClasses(computedClasses)
    }
  },

  methods: {
    dismissCallout () {
      this.$emit('hideCallout')
    }
  }
}
</script>

<style lang='scss'>
  @mixin callout-style($background, $color){
    background: $background;
    color: $color;

    .ao-callout__dismiss-icon button {
      color: $color;
    }
  }

  .ao-callout {
    display: flex;
    padding: $spacer;
    margin-bottom: $spacer;
    background: $color-gray-90;

    &__body > *:last-child {
      margin-bottom: 0;
    }

    &--info {
      @include callout-style($color-info-light, $color-info-dark)
    }

    &--success {
      @include callout-style($color-success-light, $color-success-dark)
    }

    &--caution {
      @include callout-style($color-caution-light, $color-caution-dark)
    }

    &--destructive {
      @include callout-style($color-destructive-light, $color-destructive-dark)
    }

    &__icon {
      margin-right: $spacer;
      font-size: $font-size-xl;
      opacity: 0.2;
      line-height: 1.3;
      vertical-align: baseline;
    }

    &__body {
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      flex-grow: 1;

      p {
        margin: 0 0 1rem 0;
      }
    }

    &__dismiss-icon {
      display: flex;
      flex-direction: column;

      button {
        background: transparent;
        border: 0;
        height: auto;
        width: auto;
        flex-grow: 0;
        opacity: .6;
        font-size: $font-size-sm;
        padding: 0;

        &:hover {
          opacity: 1;
        }
      }
    }
  }

</style>
