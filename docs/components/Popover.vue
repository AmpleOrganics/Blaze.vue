<template>
  <Layout>
    <template slot="description">
      <span v-html="description" />
    </template>

    <div slot="example">
      <div class="component-example component-example__popover">
        <ao-popover
          :position="selectedPosition"
          :text="popoverText"
        >
          <ao-input
            type="text"
            label="Search"
            :show-label="false"
            placeholder="Search here"
          />
        </ao-popover>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="popoverText"
            :type="'text'"
            :label="'Popover Text'"
          />
        </div>
        <div class="component-controls__group">
          <ao-select
            v-model="selectedPosition"
            label="Position"
          >
            <option
              v-for="prop in popoverPositions"
              :key="prop.name"
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
import PopoverDocumentation from './Popover'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...PopoverDocumentation,
      popoverText: 'Search the database based on your customized query',
      popoverPositions: [
        { value: 'bottom', name: 'bottom' },
        { value: 'left', name: 'left' },
        { value: 'top', name: 'top' },
        { value: 'right', name: 'right' }
      ],
      selectedPosition: 'bottom'
    }
  }
}
</script>
