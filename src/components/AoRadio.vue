<template>
  <div class="ao-radio">
    <input
      :id="uniqId"
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
    <label
      :for="uniqId"
      class="ao-radio__label-text-default"
    >
      {{ label }}
    </label>
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
  </div>
</template>

<script>
import { getUniqId } from './utils/component_utilities.js'

export default {
  inheritAttrs: false,
  props: {
    // consistant naming and proxy for vue magic
    value: {
      type: [String, Number, Boolean, Object],
      required: true
    },

    val: {
      type: [String, Number, Boolean, Object],
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
    uniqId () {
      return getUniqId()
    },
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
.ao-radio__label-text-default{
  font-size: 0
}
</style>
