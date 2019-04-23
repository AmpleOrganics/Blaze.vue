<template>
  <Layout>
    <template slot="description">
      <span v-html="description" />
    </template>

    <div slot="example">
      <div class="component-example">
        <ao-text-style
          :error="activateProp('error')"
          :small="activateProp('small')"
        >
          {{ text }}
        </ao-text-style>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="text"
            :label="'Text'"
          />
        </div>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-select
            v-model="selectedSize"
            :label="'Size'"
          >
            <option
              v-for="(prop, index) in sizeOptions"
              :key="index"
              :value="prop.value"
            >
              {{ prop.name }}
            </option>
          </ao-select>
        </div>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-select
            v-model="selectedContext"
            :label="'Context'"
          >
            <option
              v-for="(prop, index) in contextOptions"
              :key="index"
              :value="prop.value"
            >
              {{ prop.name }}
            </option>
          </ao-select>
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
import TextStyleDocumentation from './TextStyle'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...TextStyleDocumentation,
      text: 'This is some sample text',
      selectedSize: null,
      selectedContext: null,
      sizeOptions: [
        { name: 'Default', value: null },
        { name: 'Small', value: 'small' }
      ],
      contextOptions: [
        { name: 'Default', value: null },
        { name: 'Error', value: 'error' }
      ]

    }
  },

  methods: {
    activateProp (compare) {
      return compare === this.selectedSize || compare === this.selectedContext
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
