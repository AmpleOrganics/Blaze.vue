<template>
  <transition name="slide-fade">
    <div class="modal-mask">
      <div
        class="ao-modal"
        @click.self="closeModal"
        @keyup.esc.stop="closeModal"
        tabindex="0"
        ref="modal"
      >
        <div
          class="modal-dialog"
          :class="computedModalSize"
          @click.self="closeModal"
        >
          <div class="modal-content">
            <div
              class="ao-modal-header"
              :class="computedHeaderClass">
              <slot name="modal-header"/>
            </div>
            <div class="ao-modal-body">
              <slot name="modal-body"/>
            </div>
            <div class="ao-modal-footer">
              <div class="row">
                <slot name="modal-footer"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { filterClasses } from './utilities/component_utilities.js'

export default {
  name: 'AoModal',
  props: {
    // availible sizes include: 'sm', 'md', 'lg' pertaining to small medium large bootstrap classes
    size: {
      type: String,
      required: true,
      default: 'md'
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
        'ao-modal-header--default': true,
        'ao-modal-header--destructive': this.destructive,
        'ao-modal-header--caution': this.caution
      }
      return filterClasses(activeClasses)
    },

    computedModalSize () {
      // computes sizes into scss classes pertaining to size eg. md -> .ao-modal--md
      return `ao-modal--${this.size}`
    }
  },

  mounted () {
    // this sets focus on the modal so that the onEsc() functions as expected
    this.$refs.modal.focus()
  },

  methods: {
    closeModal () {
      // This only affects clicking outside the modal and pressing 'esc' key
      // if you want to close the modal, the parent of the component shoud maniupulate a showModal
      // variable that is linked to a v-if and :show
      this.$emit('modalClose')
    }
  }
}
</script>

<style lang='scss' scoped>
.modal-mask {
  position: fixed;
  z-index: 500;
  top: 0;
  left: 0;
  bottom:0;
  right:0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
}

.modal-content {
  background-color: #fff;
  border: 1px solid #999;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  background-clip: padding-box;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.ao-modal {
  padding-top: 2em;
  z-index: 501;
  height: 100%;
  &:focus {
    outline: 0px;
  }
}

.ao-modal--md {
  .modal-content{
    max-width: 40%;
    margin-left: 30%;
    margin-right: 30%;
  }
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 10px;
}

.ao-modal-header  {
  margin: 0;
  line-height: 1.42857;
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
  text-align: center;

  &--default {
    background-color: #00A38B;
    color: #ffffff;
  }

  &--destructive {
    background-color: #d93240;
    color: #fff;
  }

  &--caution {
    background-color: #f9d615;
    color: #fff;
  }
}

.ao-modal-header /deep/ div > h2 {
  margin: 0;
  line-height: 1.42857;
}

.ao-modal-body {
  position: relative;
  padding: 15px;
}

.ao-modal-footer {
  padding: 15px;
  text-align: right;
  border-top: 1px solid #e5e5e5;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
