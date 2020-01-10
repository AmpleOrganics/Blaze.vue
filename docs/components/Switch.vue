<template>
  <Layout>
    <template slot="description">
      <span v-html="description" />
    </template>

    <div slot="example">
      <div class="component-example">
        <ao-switch
          v-model="switchModel"
          :show-label="showLabel"
          :disabled="disabled"
          :switch-value="true"
          :switch-label="switchLabel"
          info-text="This is some informative text"
        />
        <p>Switch return value is: {{ switchModel }}</p>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="switchLabel"
            :type="'text'"
            :label="'Switch Label Text'"
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
import SwitchDocumentation from './SwitchDoc'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...SwitchDocumentation,
      disabled: false,
      showLabel: true,
      switchModel: true,
      switchLabel: 'This is the switch label'
    }
  },
  methods: {
    activateProp (compare) {
      return compare === this.selectedType
    }
  }
}
</script>
