<template>
  <div>
    <div class="component-example component-example__alert">
      <ao-alert
        v-if="showAlert"
        :show-alert="showAlert"
        :destructive="activateProp('destructive')"
        :caution="activateProp('caution')"
        :icon-class="'glyphicon glyphicon-ok'">
        {{ alertText }}
      </ao-alert>
    </div>
    <div class="component-controls">
      <div class="component-controls__group">
        <ao-input
          v-model="alertText"
          :type="'text'"
          :label="'Alert Text'"
        />
      </div>
      <div class="component-controls__group">
        <ao-select
          v-model="selectedType"
          label="Context">
          <option
            v-for="prop in alertTypes"
            :value="prop.value"
            :key="prop.name">
            {{ prop.name }}
          </option>
        </ao-select>
      </div>
      <div class="component-controls__group">
        <ao-checkbox
          v-model="showAlert"
          :checkbox-label="'showAlert'"
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
      alertText: 'Alert text goes here',
      showAlert: true,
      alertTypes: [
        { value: null, name: 'Default' },
        { value: 'destructive', name: 'Destructive' },
        { value: 'caution', name: 'Caution' }
      ],
      selectedType: null
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
.component-example__alert {
  height: 92px;
}
</style>
