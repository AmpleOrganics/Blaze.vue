<template>
  <Layout>
    <template slot="description">
      <span v-html="description" />
    </template>

    <div slot="example">
      <div class="component-example component-example__alert">
        <ao-alert
          v-if="showAlert"
          :show-alert="showAlert"
          :destructive="activateProp('destructive')"
          :caution="activateProp('caution')"
          :icon-class="'glyphicon glyphicon-ok'"
        >
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
            label="Context"
          >
            <option
              v-for="prop in alertTypes"
              :key="prop.name"
              :value="prop.value"
            >
              {{ prop.name }}
            </option>
          </ao-select>
        </div>
        <div class="component-controls__group">
          <ao-checkbox
            v-model="showAlert"
            :checkbox-value="true"
            checkbox-label="showAlert"
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
import AlertDocumentation from './Alert'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...AlertDocumentation,
      alertText: 'Alert text goes here',
      showAlert: false,
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
