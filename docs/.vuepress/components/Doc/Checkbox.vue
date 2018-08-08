<template>
  <div>
    <div class="component-example">
      <ao-checkbox
        :checkbox-label="checkboxLabel"
        :show-label="showLabel"
        :disabled="disabled"
        :checkbox-value="true"
      />
    </div>
    <div class="component-controls">
      <div class="component-controls__group">
        <ao-input
          v-model="checkboxLabel"
          :type="'text'"
          :label="'Checkbox Label Text'"
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
          :checkbox-label="'disabled'"
          :checkbox-value="true"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      disabled: false,
      showLabel: true,
      checkboxLabel: 'This is the checkbox label'
    }
  },
  methods: {
    activateProp (compare) {
      return compare === this.selectedType
    }
  }
}
</script>
