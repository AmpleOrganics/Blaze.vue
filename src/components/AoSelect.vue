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

.ao-form-group {
  label {
    display: inline-block;
    max-width: 100%;
    margin: $input-label-margin;
    font-weight: $font-weight-bold;
  }

  .ao-form-control {
    display: block;
    width: 100%;
    max-width: 100%;
    height: 36px;
    padding: 0px 12px;
    font-size: 16px;
    line-height: 1.4em;
    color: #585d60;
    background-color: $color-white;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;

    &[disabled], &[readonly]{
      background-color: #ebecef;
      border-color: #d7d9df;
      opacity: 1;
    }

    &[disabled] {
      cursor: not-allowed;
    }
  }
}

.ao-input-group {
  position: relative;
  display: table;
  border-collapse: separate;

  & .ao-form-control {
    display: table-cell;
    position: relative;
    z-index: 2;
    float: left;
    width: 100%;
    margin-bottom: 0;

    &:first-child {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
  }

  &__addon {
    padding: 6px 12px;
    font-size: 16px;
    font-weight: normal;
    line-height: 1;
    color: #585d60;
    text-align: center;
    background-color: #dcdedf;
    border: 1px solid #ccc;
    border-radius: 3px;
    display: table-cell;
    width: 1%;
    white-space: nowrap;
    vertical-align: middle;

    &:last-child {
      border-left: 0;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
  }
}
</style>
