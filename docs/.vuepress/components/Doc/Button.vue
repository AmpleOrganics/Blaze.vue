<template>
  <div>
    <div class="component-example">
      <ao-button
        :primary="activateProp('primary')"
        :destructive="activateProp('destructive')"
        :caution="activateProp('caution')"
        :subtle="activateProp('subtle')"
        :naked="activateProp('naked')"
        :small="activateProp('small')"
        :large="activateProp('large')"
        :jumbo="activateProp('jumbo')"
        :disabled="disabled">
        {{ buttonText }}
      </ao-button>
    </div>
    <div class="component-controls">
      <div class="component-controls__group">
        <ao-input
          v-model="buttonText"
          :type="'text'"
          :label="'Button Text'"
        />
      </div>
      <div class="component-controls__group">
        <ao-select
          label="Context"
          v-model="selectedContext">
          <option v-for="(prop, index) in contextProps" :key="index" :value="prop.value">{{ prop.name }}</option>
        </ao-select>
      </div>
      <div class="component-controls__group">
        <ao-select
          label="Size"
          v-model="selectedSize">
          <option v-for="(prop, index) in sizeProps" :key="index" :value="prop.value">{{ prop.name }}</option>
        </ao-select>
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
      buttonText: 'Text',
      contextProps: [
        {name: 'Default', value: null},
        {name: 'Primary', value: 'primary'},
        {name: 'Destructive', value: 'destructive'},
        {name: 'Caution', value: 'caution'},
        {name: 'Subtle', value: 'subtle'},
        {name: 'Naked', value: 'naked'}
      ],
      selectedContext: null,
      sizeProps: [
        {name: 'Default', value: null},
        {name: 'Small', value: 'small'},
        {name: 'Large', value: 'large'},
        {name: 'Jumbo', value: 'jumbo'},
        ],
      selectedSize: "default",
      disabled: false
    }
  },

  methods: {
    activateProp(compare) {
      return compare === this.selectedContext || compare === this.selectedSize
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
