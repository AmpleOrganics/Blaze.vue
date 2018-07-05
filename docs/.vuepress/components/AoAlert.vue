<template>
  <transition name="slide-fade">
    <div
      v-if="showAlert"
      class="ao-alert">
      <div :class="computedAlertIconClass">
        <span :class="iconClass"/>
      </div>
      <div class="ao-alert__message">
        <slot/>
      </div>
    </div>
  </transition>
</template>

<script>
import { filterClasses } from '../../../src/components/utils/component_utilities.js'

export default {
  props: {
    showAlert: {
      type: Boolean,
      required: true,
      default: false
    },

    iconClass: {
      type: String,
      default: null
    },

    destructive: {
      type: Boolean,
      default: false
    },

    caution: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    computedAlertIconClass () {
      const activeClasses = {
        'ao-alert__icon': true,
        'ao-alert__icon--destructive': this.destructive,
        'ao-alert__icon--caution': this.caution
      }
      return filterClasses(activeClasses)
    }
  },

  mounted () {
    this.autoCloseAlert()
  },

  methods: {
    autoCloseAlert () {
      setTimeout(() => {
        this.$emit('update:showAlert', false)
      }, 4000)
    }
  }

}
</script>

<style lang='scss' scoped>
@import '../_variables.scss';

@include slide-fade;

$ao-alert-height: 3.75rem;

.ao-alert {
  display: flex;
  background-color: $color-white;
  width: 75%;
  box-shadow: $shadow, $shadow-subtle;
  min-height: $ao-alert-height;

  &__container {
    position: fixed;
    display: flex;
    justify-content: center;
    z-index: $zindex-alert;
    width: 100%;
    top: 0;
  }

  &__message {
    padding: $spacer;
    display: flex;
    align-items: center;
    flex-grow: 1;
  }

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: $ao-alert-height;
    background-color: $color-success;
    color: $color-white;

    &--destructive {
      background-color: $color-destructive;
    }

    &--caution {
      background-color: $color-caution;
    }
  }
}
</style>
