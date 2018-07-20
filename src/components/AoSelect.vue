<template>
  <div class="ao-form-group">
    <label
      v-show="showLabel"
      for="name">
      {{ label }}
    </label>
    <div :class="{ 'ao-input-group': hasInputGroup }">
      <select
        :name="name"
        :required="required"
        :disabled="disabled"
        v-model="selected"
        :class="{'ao-form-control--has-error': hasError }"
        class="ao-form-control"
        @input="updateValue($event.target.value)">
        <option
          v-for="option in computedOptions"
          :key="option.value"
          :value="option.value"
          :selected="selected">
          {{ option.name }}
        </option>
      </select>
      <span
        v-if="hasIconAddon"
        :class="iconClass"
        class="ao-input-group__addon"
        v-html="iconHtml"/>
      <span
        v-if="hasAddOn"
        class="ao-input-group__addon">
        {{ addOn }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
      default: null
    },

    showLabel: {
      type: Boolean,
      default: true
    },

    name: {
      type: String,
      default: null
    },

    options: {
      type: Array,
      required: true
    },

    default: {
      type: [String, Number, Boolean],
      default: null
    },

    iconHtml: {
      type: String,
      default: null
    },

    iconClass: {
      type: String,
      default: null
    },

    addOn: {
      type: String,
      default: null
    },

    required: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    },

    hasError: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      selected: null
    }
  },

  computed: {
    computedOptions () {
      return this.options.map((option) => {
        if (typeof option === 'string') {
          return {
            name: option,
            value: option
          }
        } else {
          return option
        }
      })
    },

    hasInputGroup () {
      return this.hasIconAddon || this.hasAddOn
    },

    hasIconAddon () {
      return this.iconHtml || this.iconClass
    },

    hasAddOn () {
      return this.addOn
    }
  },

  mounted () {
    this.selected = this.default
  },

  methods: {
    updateValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang='scss' scoped>

@import '../assets/styles/mixins/shared-input-styles.scss';
@include shared-input-styles;

</style>
