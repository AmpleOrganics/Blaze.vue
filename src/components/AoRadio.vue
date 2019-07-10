<template>
  <div class="ao-radio">
    <label class="ao-radio__label">
      <input
        v-model="checked"
        v-bind="$attrs"
        :value="val"
        :disabled="disabled"
        type="radio"
        class="ao-radio__input"
        @change="toggle"
        @blur="emitBlur"
        @focus="emitFocus"
      >
      <div
        v-show="showLabel"
        class="ao-radio__content"
      >
        <span class="ao-radio__label-text">
          {{ label }}
        </span>
        <p
          v-if="infoText"
          class="ao-radio__info-text"
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
    // consistant naming and proxy for vue magic
    value: {
      type: [String, Number, Boolean],
      required: true
    },

    val: {
      type: [String, Number, Boolean],
      required: true
    },

    label: {
      type: String,
      required: true
    },

    disabled: {
      type: Boolean,
      default: false
    },

    showLabel: {
      type: Boolean,
      default: true
    },

    infoText: {
      default: null,
      type: String,
      required: false
    }
  },

  data () {
    return {
      proxy: null
    }
  },

  computed: {
    checked: {
      get () { return this.value },
      set (val) {
        this.proxy = val
        return this.proxy
      }
    }
  },

  methods: {
    toggle () {
      this.$emit('input', this.proxy)
    },

    emitBlur (event) {
      this.$emit('blur', event)
    },

    emitFocus (event) {
      this.$emit('focus', event)
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles/mixins/shared-checkbox-styles.scss';
@include shared-checkbox-styles;

</style>
