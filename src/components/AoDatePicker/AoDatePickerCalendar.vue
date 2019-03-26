<template>
  <div class="ao-datepickercalendar">
    <AoDatePickerCalendarDay
      :input-date="inputDate"
      :month-names="monthNames"
      :day-names="dayNames"
      @selected="emitSelected"
    />
    <div class="ao-datepickercalendar__footer">
      <span
        class="ao-datepickercalendar__today-button"
        @click="selectToday"
      >
        Today
      </span>
    </div>
  </div>
</template>

<script>
import AoDatePickerCalendarDay from './AoDatePickerCalendarDay'
import { format, startOfToday } from 'date-fns'

export default {
  components: {
    AoDatePickerCalendarDay
  },

  props: {
    inputDate: {
      validator: prop => typeof prop === 'string' || prop === null,
      required: true
    },

    monthNames: {
      type: Array,
      required: true
    },

    dayNames: {
      type: Array,
      required: true
    }
  },

  methods: {
    emitSelected (date) {
      this.$emit('selected', format(date, 'YYYY-MM-DD'))
    },

    selectToday () {
      this.emitSelected(startOfToday())
    }
  }
}
</script>

<style lang="scss">

.ao-datepickercalendar {
  background: $color-white;
  position: absolute;
  right: 0;
  box-shadow: $shadow;
  z-index: $zindex-dropdown;

  &__footer {
    padding: .5rem;
    border-top: 1px solid $ui-border-color-base;
  }

  &__today-button {
    color: $font-color-link;
    font-weight: $font-weight-bold;
    display: block;
    width: 100%;
    text-align: center;

    &:hover {
      cursor: pointer;
      color: $font-color-link-hover;
    }
  }
}
</style>
