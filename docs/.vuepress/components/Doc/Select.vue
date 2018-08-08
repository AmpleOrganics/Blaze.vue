<template>
  <div>
    <div class="component-example">
      <div class="component-example__display">My favourite Pokemon is {{ selected }} </div>
      <ao-select
        v-model="selected"
        :label="label"
        :placeholder="placeholder"
        :invalid="invalid"
        :disabled="disabled"
        :show-label="showLabel">
        <option
          v-for="option in options"
          :value="option.value"
          :key="option.name">
          {{ option.name }}
        </option>
      </ao-select>
    </div>
    <div class="component-controls">
      <div class="component-controls__group">
        <ao-input
          v-model="label"
          :type="'text'"
          :label="'Select Label Text'"
        />
      </div>
      <div class="component-controls__group">
        <ao-input
          v-model="placeholder"
          :type="'text'"
          :label="'Select Placeholder Text'"
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
      <div class="component-controls__group">
        <ao-checkbox
          v-model="invalid"
          :checkbox-label="'invalid'"
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
      label: 'Select Label',
      placeholder: 'Select Pokemon',
      selected: null,
      invalid: false,
      showLabel: true,
      disabled: false,
      options: [
        { value: 'Charmander', name: 'Charmander' },
        { value: 'Pikachu', name: 'Pikachu' },
        { value: 'Squirtle', name: 'Squirtle' },
        { value: 'Bulbasaur', name: 'Bulbasaur' }
      ]
    }
  },
  methods: {
    activateProp (compare) {
      return compare === this.selectedType
    }
  }
}
</script>

<style>
.component-example__display {
  padding: 15px 5px;
}
</style>
