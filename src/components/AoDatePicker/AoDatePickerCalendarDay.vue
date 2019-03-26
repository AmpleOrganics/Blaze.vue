<template>
  <div class="ao-datepickercalendarday">
    <div
      class="ao-datepickercalendarday__header"
    >
      <span
        class="ao-datepickercalendarday__header-action"
        @click="showPreviousMonth"
      >
        <i class="md-icon__left-chevron" />
      </span>
      <span class="ao-datepickercalendarday__header-text">
        {{ monthName }}
        {{ year }}
      </span>
      <span
        class="ao-datepickercalendarday__header-action"
        @click="showNextMonth"
      >
        <i class="md-icon__right-chevron" />
      </span>
    </div>
    <div class="ao-datepickercalendarday__content">
      <div
        v-for="day in dayNames"
        :key="day"
        class="ao-datepickercalendarday__content-header"
      >
        {{ day }}
      </div>
      <div
        v-for="dateItem in dates"
        :key="dateItem.key"
        :class="classes(dateItem)"
        @click="emitSelected(dateItem.value)"
      >
        {{ dateItem.date }}
      </div>
    </div>
  </div>
</template>

<script>
import { getCalendarDatesForMonth, isValidDate } from '../utils/component_utilities.js'
import { startOfToday, addMonths, subMonths, parse, getMonth, getYear, format } from 'date-fns'

export default {
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

  data () {
    return {
      calendarDate: startOfToday(),
      isMonthViewMode: false
    }
  },

  computed: {
    year () {
      return getYear(this.calendarDate)
    },

    month () {
      return getMonth(this.calendarDate)
    },

    monthName () {
      return this.monthNames[getMonth(this.calendarDate)]
    },

    dates () {
      return getCalendarDatesForMonth(this.calendarDate, this.inputDate)
    }
  },
  watch: {
    // watch to sync with user typed date
    inputDate: {
      handler (newValue) {
        if (isValidDate(newValue)) {
          this.calendarDate = parse(newValue)
        } else {
          this.calendarDate = startOfToday()
        }
      },
      immediate: true
    }
  },
  methods: {
    emitSelected (date) {
      this.$emit('selected', format(date, 'YYYY-MM-DD'))
    },

    showNextMonth () {
      this.calendarDate = addMonths(this.calendarDate, 1)
    },

    showPreviousMonth () {
      this.calendarDate = subMonths(this.calendarDate, 1)
    },

    classes (dateItem) {
      return [
        'ao-datepickercalendarday__date',
        {
          'ao-datepickercalendarday__date--outside': dateItem.month !== this.month,
          'ao-datepickercalendarday__date--today': dateItem.today,
          'ao-datepickercalendarday__date--selected': dateItem.selected
        }
      ]
    }
  }
}
</script>

<style lang="scss">
$datepicker-width: 17.625rem;
$date-cell-width: ($datepicker-width - 1rem)/7;
$datepicker-arrow-button-width: 1.625rem;

.ao-datepickercalendarday {
  width: $datepicker-width;

  &__header {
    padding: 0.25rem;
    font-weight: $font-weight-bold;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $ui-border-color-base;
  }

  &__header-action {
    cursor: pointer;
    padding: .25rem;
    line-height: 1;
    border-radius: $border-radius-base;
    width: $datepicker-arrow-button-width;
    height: $datepicker-arrow-button-width;

    &:hover {
      background: $color-gray-80;
    }

    &:first-child {
      margin-left: ($date-cell-width - $datepicker-arrow-button-width) - .25rem;
    }
    &:last-child {
      margin-right: ($date-cell-width - $datepicker-arrow-button-width) - .25rem;
    }
  }

  &__content {
    padding: .5rem;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;

  }

  &__content-header {
    margin-bottom: 0.2rem;
    text-transform: uppercase;
    font-weight: $font-weight-bold;
    color: $color-gray-40;
    font-size: .75rem;
  }

  &__date {
    cursor: pointer;
    height: $date-cell-width;
    width: $date-cell-width;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10rem;
    font-size: 0.875rem;

    &:hover {
      background: $color-gray-80;
    }

    &--outside {
      color: $color-gray-40;
    }

    &--today {
      font-weight: $font-weight-bold;
      color: $color-dark;
      position: relative;

      &:after {
        display: inline-block;
        content: "";
        border-radius: 100%;
        height: 4px;
        width: 4px;
        background: $color-dark;
        position: absolute;
        bottom: .2rem;
      }
    }

    &--selected {
      background: $color-primary;
      color: $color-white;
      font-weight: $font-weight-bold;

      &:hover {
        background: $color-primary;
      }

      &:after {
        background-color: $color-white;
      }
    }
  }
}
</style>
