<template>
  <div>
    <div class="component-example">
      <ao-badge
        :text="text"
        :success="activateProp('success')"
        :info="activateProp('info')"
        :subtle="activateProp('subtle')"
      />
    </div>
    <div class="component-controls">
      <div class="component-controls__group">
        <ao-input
          v-model="text"
          :type="'text'"
          :label="'Badge Text'"
        />
      </div>
      <div class="component-controls__group">
        <ao-select
          label="Context"
          v-model="selectedType">
          <option v-for="(prop, index) in badgeTypes" :key="index" :value="prop.value">{{ prop.name }}</option>
        </ao-select>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      text: 'new',
      badgeTypes: [
        { value: 'success', name: 'success'},
        { value: 'info', name: 'info'},
        { value: 'subtle', name: 'subtle'}
      ],
      selectedType: 'success'
    }
  },

  methods: {
    activateProp(compare) {
      return compare === this.selectedType
    }
  }
}
</script>
