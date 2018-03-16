<template>
  <div
    class="ao-alert-container"
    v-if="showAlert">
    <div class="ao-alert">
      <div :class="computedAlertIconClass">
        <slot name="alert-icon"/>
      </div>
      <div class="ao-alert-message">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
import { filterClasses } from './utilities/component_utilities.js'

export default {
  name: 'AoAlert',
  props: {
    showAlert: {
      type: Boolean,
      required: true,
      default: false
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
        'ao-alert-icon': true,
        'ao-alert-icon--default': true,
        'ao-alert-icon--destructive': this.destructive,
        'ao-alert-icon--caution': this.caution
      }
      return filterClasses(activeClasses)
    }
  },

  mounted () {
    setTimeout(() => {
      this.$emit('update:showAlert', false)
    }, 4000)
  }
}
</script>

<style lang='scss' scoped>
.ao-alert-container {
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 500;
  width: 100%;
  top: 0;
}

.ao-alert {
  display: flex;
  border: 1px solid #000;
  color: #474a4c;
  background-color: white;
}

.ao-alert-message {
  padding: 15px;
  align-items: center;
}

.ao-alert-icon {
  display: flex;
  justify-content: center;
  align-items: center;

  &--default {
    background-color: #00A38B;
    color: #000;
  }

  &--destructive {
    background-color: #d93240;
    color: #fff;
  }

  &--caution {
    background-color: #f9d615;
    color: #726103;
  }
}
</style>
