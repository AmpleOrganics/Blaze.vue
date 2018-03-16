<template>
  <div class="section-header">
    <div class="section-header-area">
      <span
        class="section-header-icon"
        v-if="hasIcon"
        :class="iconClass"
        v-html="iconHtml"
      />
      <h2 class="section-header-title">{{ title }}</h2>
      <div class="section-header-toolbar">
        <slot name="section-header-toolbar"/>
      </div>
    </div>
    <slot name="section-header-navbar"/>
  </div>
</template>

<script>
export default {
  name: 'AoSectionHeader',
  props: {
    title: {
      type: String,
      required: true,
      default: null
    },

    iconHtml: {
      type: String,
      default: null
    },

    iconClass: {
      type: String,
      default: null
    }
  },

  computed: {
    hasIcon () {
      return this.iconHtml || this.iconClass
    }
  }
}
</script>

<style lang='scss' scoped>
  .section-header {
    background-color: #fff;
    border: 1px solid #dcdedf;
    border-radius: 3px;
    padding: 0;
    margin-bottom: 15px;
  }

  .section-header-area {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 15px;
  }

  .section-header-icon {
    float: left;
    line-height: 1.1;
    font-size: 28px;
    color: #00A38B;
    margin: 0 12px 0 0;
  }

  .section-header-title {
    margin: 0;
    font-size: 28px;
    font-weight: 200;
    display: inline-block;
  }

  .section-header-toolbar {
    margin-left: auto;

    & .form-group {
      display: inline-block;
    }

    & * {
      margin-left: 10px;
    }
  }

  .section-header-navbar {
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
  }
</style>
