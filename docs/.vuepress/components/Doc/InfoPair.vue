<template>
  <div>
    <div class="component-example">
      <ao-info-pair :label="label">
        {{ info }}
      </ao-info-pair>
    </div>
    <div class="component-controls">
      <div class="component-controls__group">
        <ao-input
          v-model="label"
          :type="'text'"
          :label="'Info Pair Label Text'"
        />
      </div>
    </div>
    <div class="component-controls">
      <div class="component-controls__group">
        <ao-input
          v-model="info"
          :type="'text'"
          :label="'Info Pair Text'"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      label: 'Info Label',
      info: 'Information goes here'
    }
  }
}
</script>
