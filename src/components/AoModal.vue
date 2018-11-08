<template>
  <transition name="slide-fade">
    <div class="ao-modal-mask">
      <div
        ref="modal"
        class="ao-modal"
        tabindex="0"
        @click.self="closeModal"
        @keyup.esc.stop="closeModal"
      >
        <div
          :class="computedModalSize"
          @click.self="closeModal"
        >
          <div class="ao-modal__content">
            <div :class="computedHeaderClass">
              <h2 class="ao-modal__header-text">
                {{ headerText }}
              </h2>
            </div>
            <div
              v-if="hasSlot('modal-toolbar')"
              class="ao-modal__toolbar"
            >
              <slot name="modal-toolbar" />
            </div>
            <div
              v-if="hasSlot('modal-body')"
              class="ao-modal__body"
            >
              <slot name="modal-body" />
            </div>
            <div
              v-if="hasSlot('modal-footer')"
              class="ao-modal__footer"
            >
              <div class="row">
                <slot name="modal-footer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { filterClasses } from './utils/component_utilities.js'

export default {
  props: {
    headerText: {
      type: String,
      required: true,
      default: ''
    },

    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      }
    },

    destructive: {
      type: Boolean,
      default: false
    },

    caution: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    computedHeaderClass () {
      const activeClasses = {
        'ao-modal__header': true,
        'ao-modal__header--destructive': this.destructive,
        'ao-modal__header--caution': this.caution
      }
      return filterClasses(activeClasses)
    },

    computedModalSize () {
      return `ao-modal--${this.size}`
    }
  },

  mounted () {
    // this sets focus on the modal so that the onEsc() functions as expected
    this.$refs.modal.focus()
  },

  methods: {
    hasSlot (slotName) {
      return !!this.$slots[slotName]
    },
    closeModal () {
      // This only affects clicking outside the modal and pressing 'esc' key
      // if you want to close the modal, the parent of the component shoud maniupulate a showModal
      // variable that is linked to a v-if and :show
      this.$emit('modalClose')
    }
  }
}
</script>

<style lang='scss'>
.ao-modal {
  padding-top: 2em;
  z-index: $zindex-modal;
  height: 100%;
  padding-left: $spacer;
  padding-right: $spacer;

  &:focus {
    outline: 0;
  }

  &__header {
    margin: 0;
    padding: $spacer;
    text-align: center;
    color: $color-white;
    background-color: $color-primary;

    &--destructive {
      background-color: $color-destructive;
    }

    &--caution {
      color: $color-dark;
      background-color: $color-caution;
    }
  }

  &__header-text {
    margin: 0;
    line-height: $line-height-base;
    font-size: $font-size-lg;
    font-weight: $font-weight-bold;
  }

  &__content {
    background-color: $color-white;
    background-clip: padding-box;
    border-radius: $border-radius-base;
    box-shadow: $shadow-dramatic;
    transition: all $transition-base;

    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  &__body {
    position: relative;
    padding: $spacer;
  }

  &__footer {
    padding: $spacer;
    text-align: right;
    border-top: 1px solid $color-gray-60;
  }

  &--large &__content {
    max-width: 800px;
  }

  &--medium &__content {
    max-width: 600px;
  }

  &--small &__content {
    max-width: 400px;
  }
}

.ao-modal-mask {
  position: fixed;
  z-index: $zindex-modal-backdrop;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
  transition: opacity $transition-base;
}

.slide-fade {
  &-enter,
  &-leave-to {
    opacity: 0;
    .ao-modal__content {
        transform: translateY(-2em);
    }
  }
}
</style>
