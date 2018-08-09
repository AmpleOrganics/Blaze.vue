<template>
  <div>
    <div class="component-example">
      <ao-info-pair :label="label">
        {{info}}
      </ao-info-pair>
    </div>
    <div class="component-controls">
      <div class="component-controls__group">
        <ao-input
          v-model="label"
          :type="'text'"
          :label="'Info Pair Label'"
        />
      </div>
    </div>
    <div class="component-controls">
      <div class="component-controls__group">
        <ao-input
          v-model="info"
          :type="'text'"
          :label="'Info Pair Info'"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      label: 'Label',
      info: 'Info'
    }
  }
}
</script>
