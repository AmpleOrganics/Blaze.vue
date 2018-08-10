<template>
  <div>
    <div class="component-example">
      <ao-section-header
        :title="title"
        :subtitle="subtitle">
      </ao-section-header>
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
          :label="'Section Header SubTitle'"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Section Header Title',
      subtitle: 'This is a subtitle'
    }
  }
}
</script>
