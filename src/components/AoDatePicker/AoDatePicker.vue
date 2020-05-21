<template>
  <div v-click-outside="hideCalendar">
    <div class="ao-datepicker">
      <ao-input
        v-bind="$attrs"
        type="text"
        :value="value"
        :label="label"
        :show-label="showLabel"
        :name="name"
        icon-class="md-icon__date_range"
        :add-on="addOn"
        :disabled="disabled"
        :disable-all="disableAll"
        :invalid="invalid"
        :invalid-message="invalidMessage"
        :size="size"
        :instruction-text="instructionText"
        :is-icon-clickable="true"
        @icon-clicked="toggleCalendar"
        @change="emitChange"
        @input="emitInput"
        @blur="emitBlur"
        @focus="emitFocus"
      >
        <ao-date-picker-calendar
          v-if="calendarVisible"
          slot="below-input"
          :input-date="value"
          :month-names="monthNames"
          :day-names="dayNames"
          class="ao-datepicker__calendar"
          @selected="onSelected"
        />
      </ao-input>
    </div>
  </div>
</template>

<script>
import AoInput from '../AoInput'
import AoDatePickerCalendar from './AoDatePickerCalendar'
import ClickOutside from '../../directives/click-outside.js'

export default {
  components: {
    AoInput,
    AoDatePickerCalendar
  },

  directives: {
    ClickOutside
  },

  inheritAttrs: false,

  props: {
    value: {
      type: [String],
      default: null
    },

    label: {
      type: String,
      required: true
    },

    showLabel: {
      type: Boolean,
      default: true
    },

    name: {
      type: String,
      default: null
    },

    addOn: {
      type: String,
      default: null
    },

    disabled: {
      type: Boolean,
      default: false
    },

    disableAll: {
      type: Boolean,
      default: false
    },

    invalid: {
      type: Boolean,
      default: false
    },

    invalidMessage: {
      type: String,
      default: null
    },

    size: {
      type: String,
      default: null
    },

    instructionText: {
      type: String,
      default: null
    },

    monthNames: {
      type: Array,
      default: () => (['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])
    },

    dayNames: {
      type: Array,
      default: () => (['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])
    }
  },

  data () {
    return {
      calendarVisible: false
    }
  },

  methods: {
    toggleCalendar () {
      this.calendarVisible = !this.calendarVisible
    },

    onSelected (date) {
      this.calendarVisible = false
      this.emitInput(date)
    },

    emitInput (value) {
      this.$emit('input', value)
    },

    emitBlur (event) {
      this.$emit('blur', event)
    },

    emitFocus (event) {
      this.$emit('focus', event)
    },

    emitChange (value) {
      this.$emit('change', value)
    },

    hideCalendar () {
      this.calendarVisible = false
    }
  }
}
</script>

<style lang="scss">

.ao-datepicker {
  position: relative;
}

/* Hacky CSS approach to styling the 'input addon' per spec */
.ao-datepicker .ao-input--has-addon {
  display: block;
  position: relative;

  .ao-form-control:first-child {
    border-bottom-right-radius: $border-radius-base;
    border-top-right-radius: $border-radius-base;
  }

  & > .ao-input__addon {
    display: flex;
    justify-content: center;
    position: absolute;
    min-width: $input-height-base;
    top: 0;
    right: 0;
    border: 0;
    background-color: transparent;
    font-size: $font-size-lg;
    line-height: 1;
    color: $color-gray-30;

    &:hover {
      color: $color-gray-10;
    }
  }

  & > .ao-form-control[disabled="disabled"] + .ao-input__addon:hover {
    color: $color-gray-30;
    cursor: not-allowed;
  }
}

</style>
