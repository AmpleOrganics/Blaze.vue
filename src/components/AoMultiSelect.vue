<template>
  <div
    v-click-outside="hideItems"
    :class="['ao-multi-select', 'ao-form-group', {'ao-form-group--disabled': disableAll}, {'ao-form-group--has-feedback': hasFeedbackText }]"
  >
    <div
      v-show="showLabel"
      class="ao-form-group__label"
    >
      <label for="name">
        {{ label }}
      </label>
      <slot name="tooltip" />
    </div>
    <div class="ao-input">
      <div
        tabindex="0"
        class="ao-form-control"
        :class="['ao-multi-select__summary', {'ao-form-control--invalid': invalid }, 'ao-form-control', computedSize]"
        :disabled="disabled || disableAll"
        @blur="whenEnabled(() => emitBlur())"
        @focus="whenEnabled(() => emitFocus())"
        @click="whenEnabled(() => toggleItems())"
      >
        <span class="ao-multi-select__summary-text">
          {{ summary }}
        </span>
        <i class="md-icon__unfold-more" />
      </div>
      <div
        v-if="isExpanded"
        class="ao-multi-select__options"
      >
        <div class="ao-multi-select__option">
          <ao-button
            naked
            class="ao-multi-select__clear"
            @click.native="emitClear"
          >
            {{ clearAllSelectionsLabel }}
          </ao-button>
        </div>
        <slot />
      </div>
    </div>
    <span
      v-show="invalidMessage && invalid"
      class="ao-form-group__invalid-message"
    >
      {{ invalidMessage }}
    </span>
    <span
      v-if="instructionText"
      class="ao-form-group__instruction-text"
    >
      {{ instructionText }}
    </span>
  </div>
</template>

<script>
import { filterClasses } from './utils/component_utilities.js'
import ClickOutside from '../directives/click-outside.js'

export default {
  directives: {
    ClickOutside
  },

  props: {
    selected: {
      type: Array,
      default: () => []
    },

    label: {
      type: String,
      required: true
    },

    showLabel: {
      type: Boolean,
      default: true
    },

    clearAllSelectionsLabel: {
      type: String,
      default: 'Clear all selections'
    },

    invalid: {
      type: Boolean,
      default: false
    },

    invalidMessage: {
      type: String,
      default: null
    },

    disabled: {
      type: Boolean,
      default: false
    },

    placeholder: {
      type: String,
      default: null
    },

    size: {
      type: String,
      default: null,
      validator: function (size) {
        return [null, 'small'].includes(size)
      }
    },

    instructionText: {
      type: String,
      default: null
    },

    disableAll: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      isExpanded: false
    }
  },

  computed: {
    computedSize () {
      const activeClasses = {
        'ao-form-control--small': this.size === 'small'
      }
      return filterClasses(activeClasses)
    },

    hasFeedbackText () {
      return this.instructionText || (this.invalidMessage && this.invalid)
    },

    summary () {
      return this.selected.length ? this.selected.join(', ') : this.placeholder
    }
  },

  methods: {
    emitBlur (event) {
      this.$emit('blur', event)
    },

    emitFocus (event) {
      this.$emit('focus', event)
    },

    emitClear () {
      this.$emit('clear')
    },

    toggleItems () {
      this.isExpanded = !this.isExpanded
    },

    hideItems () {
      this.isExpanded = false
    },

    whenEnabled  (callback) {
      const enabled = !(this.disabled || this.disableAll)
      enabled && callback()
    }
  }

}
</script>

<style lang='scss'>
@import '../assets/styles/mixins/shared-input-styles.scss';
@include shared-input-styles;

.ao-multi-select {
  position: relative;

  &__summary {
    display: flex !important;
    justify-content: space-between;
    align-items: center;
    user-select: none;

    &-text {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  &__options {
    padding: 0 $spacer-sm;
    background: $color-white;
    box-shadow: $shadow, $shadow-subtle;
    display: flex;
    flex-direction: column;
    border: $border-gray-50;
    min-width: 140px;
    text-align: left;
    margin-top: 3px;
    white-space: nowrap;
    position: absolute;
    width: 100%;

    .ao-checkbox:last-of-type {
      margin-bottom: 0 !important;
    }

    .ao-checkbox__label {
      display: flex;
      align-items: center;
    }
  }

  &__clear.ao-button {
    color: $font-color-error;
    font-weight: normal;
    padding: 0;
  }
}
</style>
