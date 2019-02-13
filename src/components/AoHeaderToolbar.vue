<template>
  <header
    :class="{ 'ao-header-toolbar--fixed': fixed }"
    class="ao-header-toolbar"
  >
    <div
      :class="{ 'clickable': isClickable }"
      class="ao-header-toolbar__title"
    >
      <div
        v-if="hasIconAddon || hasIconUrlAddon"
        class="ao-header-toolbar__icon"
        @click="onTitleClick"
      >
        <span
          v-if="hasIconAddon"
          :class="iconClass"
          v-html="iconHtml"
        />
        <img
          v-if="hasIconUrlAddon"
          :src="iconUrl"
        >
      </div>
      <span
        :class="iconClass"
        class="ao-header-toolbar__title-text"
        @click="onTitleClick"
      >
        {{ title }}
      </span>
    </div>
    <div class="ao-header-toolbar__controls">
      <slot />
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    titleClicked: {
      type: Function,
      default: null
    },
    iconUrl: {
      type: String,
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
    fixed: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    hasIconAddon () {
      return this.iconHtml || this.iconClass
    },
    hasIconUrlAddon () {
      return this.iconUrl
    },
    isClickable () {
      return !!this.titleClicked
    }
  },

  methods: {
    onTitleClick () {
      this.titleClicked && this.titleClicked()
    }
  }
}
</script>

<style lang="scss">
.ao-header-toolbar {
  display: flex;
  width: 100%;
  height: $header-toolbar-height;
  color: $color-gray-30;
  background: $color-white;
  justify-content: space-between;
  border-bottom: $border-gray-50;
  font-size: $font-size-sm;

  &__title {
    padding-left: $spacer;
    display: flex;
    align-items: center;
  }

  &__icon {
    padding-right: $spacer/2;
    display: flex;
    align-items: center;

    img {
      max-height: $header-icon-height;
    }

    span {
      font-size: $font-size-xxl;
      vertical-align: middle;
    }
  }

  &__title-text {
    font-size: $font-size-lg;
  }

  &__controls {
    display: flex;

    & > * {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: center;
      height: 100%;
      min-width: $header-toolbar-height;
      padding: 20px;
      border-left: $border-gray-50;
      color: $color-gray-30;
      text-decoration: none;
      border-radius: 0;
      font-size: $font-size-base;

      &.active {
        color: $color-gray-10;
        background: $color-gray-90;
      }

      &:hover {
        color: $color-gray-10;
        background: rgba(0, 0, 0, 0.05);
        cursor: pointer;
        text-decoration: none;
      }
    }
  }

  &__title.clickable > * {
    cursor: pointer;
  }

  &--fixed {
    position: fixed;
    z-index: $zindex-header-toolbar;
  }
}

</style>
