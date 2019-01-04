<template>
  <Layout>
    <template slot="description">
      <span v-html="description" />
    </template>

    <div slot="example">
      <div class="component-example">
        <div class="component-example__display">
          <p>My favourite Pokemon is {{ selected }}</p>
        </div>
        <ao-select
          v-model="selected"
          :label="label"
          :placeholder="placeholder"
          :invalid="invalid"
          :invalid-message="invalidMessage"
          :disabled="disabled"
          :disable-all="disableAll"
          :show-label="showLabel"
        >
          <option
            v-for="option in options"
            :key="option.name"
            :value="option.value"
          >
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
          <ao-input
            v-model="invalidMessage"
            :type="'text'"
            :label="'Invalid Message'"
          />
        </div>
        <div class="component-controls__group">
          <ao-checkbox
            v-model="showLabel"
            :checkbox-value="true"
            checkbox-label="showLabel"
          />
        </div>
        <div class="component-controls__group">
          <ao-checkbox
            v-model="disabled"
            :checkbox-value="true"
            checkbox-label="disabled"
          />
        </div>
        <div class="component-controls__group">
          <ao-checkbox
            v-model="disableAll"
            :checkbox-value="true"
            checkbox-label="disable all"
          />
        </div>
        <div class="component-controls__group">
          <ao-checkbox
            v-model="invalid"
            :checkbox-value="true"
            checkbox-label="invalid"
          />
        </div>
      </div>
    </div>
    <template slot="snippet">
      {{ snippet }}
    </template>
    <template slot="api">
      <ApiTable :rows="apiRows" />
    </template>
  </Layout>
</template>

<script>
import Layout from '../layout/Layout'
import ApiTable from '../helpers/ApiTable'
import SelectDocumentation from './Select'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...SelectDocumentation,
      label: 'Acceptable Pokemon',
      placeholder: 'Select Pokemon',
      selected: null,
      invalid: false,
      showLabel: true,
      disabled: false,
      disableAll: false,
      invalidMessage: 'INVALID!',
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
