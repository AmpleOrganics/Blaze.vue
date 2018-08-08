<template>
  <div>
    <div class="component-example">
      <ao-checkbox
        :checkbox-label="checkboxLabel"
        :show-label="showLabel"
        :disabled="disabled"
      />
    </div>
    <div class="component-controls">
      <div class="component-controls__group">
        <ao-input
          v-model="checkboxLabel"
          :type="'text'"
          :label="'Alert Text'"
        />
      </div>
      <div class="component-controls__group">
        <ao-checkbox
          v-model="showLabel"
          :checkbox-label="'showLabel'"
          :checkbox-value="true"
        />
      </div>
      <div class="component-controls__group">
        <ao-checkbox
          v-model="disabled"
          :checkbox-label="'Disabled'"
          :checkbox-value="true"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      disabled: false,
      showLabel: true,
      checkboxLabel: 'Label'
    }
  },
  methods: {
    activateProp(compare) {
      return compare === this.selectedType
    }
  }
}
</script>
