<template>
  <div class="ao-form-group">
    <label v-if="label" for="name">
      {{ label }}
    </label>
    <div :class="{ 'ao-input-group': hasInputGroup }">
      <select
        class="ao-form-control"
        :name="name"
        @input="updateValue($event.target.value)"
        :required="required"
        :disabled="disabled"
        v-model="selected"
      >
        <option
          v-for="option in computedOptions"
          :key="option.value"
          :value="option.value"
          :selected="selected"
        >
          {{ option.name }}
        </option>
      </select>
      <span
        class="ao-input-group__addon"
        v-if="hasIconAddon"
        v-html="iconHtml"
        :class="iconClass"
      />
      <span class="ao-input-group__addon" v-if="hasAddOn">
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
      default: null
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

@include shared-input-styles;

</style>
