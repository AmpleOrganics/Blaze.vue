<template>
  <div class="ao-switch">
    <label
      :disabled="disabled"
      class="ao-switch__label"
    >
      <input
        v-model="checked"
        v-bind="$attrs"
        :value="switchValue"
        :disabled="disabled"
        type="checkbox"
        @change="check"
        @blur="emitBlur"
        @focus="emitFocus"
      >
      <span class="ao-switch__input" />
      <div
        v-show="showLabel"
        class="ao-switch__content"
      >
        <span class="ao-switch__label-text">
          {{ switchLabel }}
        </span>
        <p
          v-if="infoText"
          class="ao-switch__info-text"
        >
          {{ infoText }}
        </p>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    // both this and switchValue needed to avoid vue issue
    value: {
      type: [Array, Boolean, Number, Object],
      default: null
    },

    switchValue: {
      type: [String, Number, Boolean, Object],
      required: true
    },

    emitSwitchValue: {
      type: Boolean,
      default: false
    },

    showLabel: {
      type: Boolean,
      default: true
    },

    switchLabel: {
      type: String,
      required: true
    },

    disabled: {
      type: Boolean,
      default: false
    },

    infoText: {
      default: null,
      type: String,
      required: false
    }
  },

  data () {
    return {
      switchModel: false
    }
  },

  computed: {
    // Sets the v-model as the v-model from the parent, updates the v-model in this component
    checked: {
      get () {
        return this.value
      },
      set (value) {
        this.switchModel = value
      }
    }
  },

  methods: {
    check (value) {
      if (this.emitSwitchValue) {
        this.$emit('input', this.switchModel ? this.switchValue : null)
      } else {
        this.$emit('input', this.switchModel)
      }
    },

    emitFocus (event) {
      this.$emit('focus', event)
    },

    emitBlur (event) {
      this.$emit('blur', event)
    }
  }
}
</script>

<style lang='scss'>
.ao-switch {
  position: relative;
  display: block;
  margin-bottom: 2px;
  line-height: $line-height-base;

  &__label {
    margin-bottom: 0;
    display: flex;
    cursor: pointer;

    input[type=checkbox] {
      opacity: 0;
      position: absolute;
      outline: none;
      z-index: -1;

      + .ao-switch__input {
        display: flex;
        align-items: center;
        flex-shrink: 0;
        width: 3.15em;
        height: 1.65em;
        padding-left: .25em;
        padding-right: .25em;
        background: $color-white;
        border-radius: 1em;
        border: 1px solid $input-border-color;
        &:before {
          content: '';
          display: block;
          width: 1.15em;
          height: 1.15em;
          background: $color-gray-30;
          border: 1px solid $color-gray-30;
          border-radius: 1em;
        }
      }

      &[disabled], &[readonly] {
        + .ao-switch__input {
          background: $color-gray-80;
          cursor: not-allowed;
        }
      }
      &:checked + .ao-switch__input {

        &:before {
          background: $color-primary;
          border: 1px solid $color-primary;
          transform: translate3d(100%, 0, 0);
        }
      }
      &:focus {
        outline: none;
        + .ao-switch__input {
          border-color: $color-gray-60;
          box-shadow: 0 0 0.5em rgba($color-gray-60, 0.6);
        }
        &:checked + .ao-switch__input {
          border-color: $input-focus-border-color;
          box-shadow: 0 0 0.5em rgba($color-gray-60, 0.8);
        }
      }
    }
  }

  &__content {
    display: inline-block;
    font-weight: normal;
    vertical-align: top;
    margin-left: 1em;
  }

  &:last-of-type {
    margin-bottom: 1rem;
  }

  &__info-text {
    margin-bottom: $spacer-micro;
    font-size: $font-size-sm;
    color: $color-gray-30;
  }
}
</style>
