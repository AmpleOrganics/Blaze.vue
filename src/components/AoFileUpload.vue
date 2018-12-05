<template>
  <div :class="['ao-form-group', {'ao-form-group--disabled': disableAll}, {'ao-form-group--has-feedback': hasFeedbackText }]">
    <div
      v-show="showLabel"
      class="ao-form-group__label"
    >
      <label :for="name">
        {{ label }}
      </label>
      <slot name="fileUploadLabelTooltip" />
    </div>
    <div
      :class="['ao-file-upload', {'ao-file-upload--is-dragging': dragIn}]"
      @drop="dropFile"
    >
      <input
        ref="fileInput"
        v-bind="$attrs"
        :class="[{'ao-form-control--invalid': invalid }, 'ao-file-upload__input']"
        :name="name"
        :disabled="disabled || disableAll"
        :multiple="multiple"
        type="file"
        @change="updateFile"
        @blur="emitBlur"
      >
      <div class="ao-file-upload__default-state">
        <div
          v-if="dragAndDrop"
          class="ao-file-upload__drag-text"
        >
          <p>
            Drag & drop files here
          </p>
          <p>
            or
          </p>
        </div>
        <ao-button
          class="ao-file-upload__button"
          @click.native="openFileSelector"
        >
          Choose Files
        </ao-button>
      </div>
      <div class="ao-file-upload__drag-state">
        <p>Drop files here</p>
      </div>
      <div
        v-for="file in files"
        :key="file.data.name"
        class="ao-file-upload--files"
      >
        <div v-if="isImage(file.type)">
          <img
            :src="getFileSrc(file.data)"
            :alt="file.data.name"
          >
        </div>
        <div v-else>
          {{ file.type }}
          {{ truncateName(file.data.name) }}
        </div>
        <i
          class="glyphicon glyphicon-remove"
          @click="removeFile(file.data.name)"
        />
      </div>
    </div>
    <span
      v-show="invalidMessage && invalid"
      class="ao-form-group__invalid-message"
    >
      {{ invalidMessage }}
    </span>
    <span
      v-if="instructionText"
      class="ao-form-group__instruction-text"
    >
      {{ instructionText }}
    </span>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true
    },

    showLabel: {
      type: Boolean,
      default: true
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

    name: {
      type: String,
      required: true
    },

    instructionText: {
      type: String,
      default: null
    },

    uploadPercentage: {
      type: Number,
      default: null
    },

    multiple: {
      type: Boolean,
      default: false
    },

    dragAndDrop: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      files: [],
      dragIn: false
    }
  },

  computed: {
    hasFeedbackText () {
      return this.instructionText || (this.invalidMessage && this.invalid)
    }
  },

  mounted () {
    const enter = ['drag', 'dragstart', 'dragover', 'dragenter', 'drop']
    const leave = ['dragend', 'dragleave']

    enter.forEach((enter) => {
      window.addEventListener(enter, (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.dragIn = true
      })
    })

    leave.forEach((leave) => {
      window.addEventListener(leave, (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.dragIn = false
      }, false)
    })
  },

  destroyed () {
    ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach((e) => {
      window.removeEventListener(e, { passive: false })
    })
  },

  methods: {
    updateFile (file) {
      if (this.multiple) {
        this.handleImages(file.currentTarget.files[0])
        this.$emit('change', file.currentTarget.files[0])
      }
    },

    emitBlur (event) {
      this.$emit('blur', event)
    },

    dropFile (file) {
      this.handleImages(file.dataTransfer.files[0])
      this.$emit('drop', file.dataTransfer.files[0])
    },

    handleImages (file) {
      const splitName = file.name.split('.')
      const type = splitName[splitName.length - 1]

      if (this.multiple) {
        this.files.push({ data: file, type })
      } else {
        this.files = [{ data: file, type }]
      }
    },

    openFileSelector () {
      this.$refs.fileInput.click()
    },

    removeFile (fileName) {
      if (this.multiple) {
        this.files = this.files.filter((file) => {
          return file.data.name !== fileName
        })
        if (this.files.length === 0) {
          this.dragIn = false
        }
        this.$emit('removeFile', fileName)
      } else {
        this.files = []
        this.dragIn = false
        this.$refs.fileInput.value = ''
        this.$emit('removeFile', fileName)
      }
    },

    truncateName (name) {
      if (name.split('').length > 25) {
        return `${name.slice(0, 25)}...`
      } else {
        return name
      }
    },

    isImage (type) {
      const imageTypes = ['jpg', 'jpeg', 'png']
      return imageTypes.indexOf(type) > -1
    },

    getFileSrc (file) {
      // let reader = new FileReader()
      // reader.readAsDataURL(file.data)
      // return reader.result
      return URL.createObjectURL(file)
    }
  }
}
</script>

<style lang='scss'>

@import '../assets/styles/mixins/shared-input-styles.scss';

@include shared-input-styles;

.ao-file-upload {
  padding: $spacer;
  text-align: center;
  background: $color-white;
  border: 1px dashed $input-border-color;
  border-radius: $border-radius-base;
  position: relative;

  &__input {
    display: none;
  }

  &__drag-text {
    font-size: $font-size-sm;
    color: $color-gray-30;
    margin-bottom: $spacer-micro;

    p {
      margin-bottom: 0;
    }
  }

  &__default-state {
    opacity: 1;
    transition: opacity $transition-base
  }

  &__drag-state {
    opacity: 0;
    z-index: 0;
    display: flex;
    text-align: center;
    flex-direction: column;;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: opacity $transition-base;

    p {
      color: $color-primary;
      margin-bottom: 0;
    }

  }

  &__button {
    z-index: 1;
    position: relative;
  }

  &--is-dragging {
    border-color: $color-primary;
    background: $color-primary-light;
  }

  &--is-dragging &__default-state {
    opacity: 0;
  }

  &--is-dragging &__drag-state {
    opacity: 1;
  }

  &--is-dragging:hover {
    border-style: solid;
  }

  &--files {
    position:relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
}

.glyphicon-remove {
  margin: auto 0;
  opacity: 0.6;
  padding-left: 0.5rem;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
}

img {
  margin: auto 0;
}

</style>
