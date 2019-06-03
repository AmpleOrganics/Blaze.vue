<template>
  <Layout>
    <template slot="description">
      <span v-html="description" />
    </template>

    <div slot="example">
      <div class="component-example">
        <div class="component-example__display">
          <p>My favourite Pokemon(s) are {{ selectedItemNames }}</p>
        </div>
        <ao-multi-select
          :label="label"
          :placeholder="placeholder"
          :invalid="invalid"
          :invalid-message="invalidMessage"
          :disabled="disabled"
          :disable-all="disableAll"
          :show-label="showLabel"
          :selected="selectedItemNames"
          @clear="clear"
        >
          <ao-checkbox
            v-for="option in options"
            :key="option.name"
            v-model="selected"
            :checkbox-value="option.value"
            :checkbox-label="option.name"
          />
        </ao-multi-select>
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
      <code>{{ snippet }}</code>
    </template>
    <template slot="api">
      <ApiTable :rows="apiRows" />
    </template>
  </Layout>
</template>

<script>
import Layout from '../layout/Layout'
import ApiTable from '../helpers/ApiTable'
import MultiSelectDocumentation from './MultiSelect'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...MultiSelectDocumentation,
      label: 'Acceptable Pokemon(s)',
      selected: [],
      placeholder: 'Select Pokemon(s)',
      invalid: false,
      showLabel: true,
      disabled: false,
      disableAll: false,
      invalidMessage: 'INVALID!',
      options: [
        { value: 'charmander', name: 'Charmander' },
        { value: 'pikachu', name: 'Pikachu' },
        { value: 'squirtle', name: 'Squirtle' },
        { value: 'bulbasaur', name: 'Bulbasaur' }
      ]
    }
  },

  computed: {
    selectedItemNames () {
      return this.options.filter(option => this.selected.includes(option.value))
        .map(item => item.name)
    }
  },

  methods: {
    clear () {
      this.selected = []
    }
  }
}
</script>
