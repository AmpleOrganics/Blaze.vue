<template>
  <div>
    <div class="component-example">
      <ao-section-header
        :title="title"
        :subtitle="subtitle"
        :icon-html="iconHtml"
      />
    </div>
    <div class="component-controls">
      <div class="component-controls__group">
        <ao-input
          v-model="title"
          :type="'text'"
          :label="'Section Header Title'"
        />
      </div>
      <div class="component-controls__group">
        <ao-input
          v-model="subtitle"
          :type="'text'"
          :label="'Section Header Subtitle'"
        />
      </div>
      <div class="component-controls__group">
        <ao-input
          v-model="iconHtml"
          :type="'text'"
          :label="'iconHtml'"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      title: 'This is the section header title',
      subtitle: 'The subtitle goes here',
      iconHtml: 'Hello!'
    }
  }
}
</script>
