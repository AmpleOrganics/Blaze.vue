<template>
  <Layout>
    <template slot="description">
      <span v-html="description"/>
    </template>

    <div slot="example">
      <div class="component-example component-example__tooltip">
        <ao-tooltip
          :position="selectedPosition"
          :text="tooltipText"
          :multiline="tooltipMultiline">
          <ao-button primary>Hover over me</ao-button>
        </ao-tooltip>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="tooltipText"
            :type="'text'"
            :label="'Tooltip Text'"
          />
        </div>
        <div class="component-controls__group">
          <ao-select
            v-model="selectedPosition"
            label="Position">
            <option
              v-for="prop in tooltipPositions"
              :value="prop.value"
              :key="prop.name">
              {{ prop.name }}
            </option>
          </ao-select>
        </div>
        <div class="component-controls__group">
          <ao-checkbox
            v-model="tooltipMultiline"
            :checkbox-label="'Multiline'"
            :checkbox-value="true"
          />
        </div>
      </div>
    </div>
    <template slot="snippet">{{ snippet }}</template>
    <template slot="api">
      <ApiTable
        :rows="apiRows"
      />
    </template>
  </Layout>
</template>

<script>
import Layout from '../layout/Layout'
import ApiTable from '../helpers/ApiTable'
import TooltipDocumentation from './Tooltip'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...TooltipDocumentation,
      tooltipText: 'Tooltip text goes here',
      tooltipMultiline: true,
      tooltipPositions: [
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
