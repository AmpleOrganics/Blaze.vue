<template>
  <Layout>
    <template slot="description">
      <span v-html="description" />
    </template>

    <div slot="example">
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
            v-model="selectedType"
            label="Context"
          >
            <option
              v-for="(prop, index) in badgeTypes"
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
import BadgeDocumentation from './Badge'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...BadgeDocumentation,
      text: 'new',
      badgeTypes: [
        { value: 'success', name: 'success' },
        { value: 'info', name: 'info' },
        { value: 'subtle', name: 'subtle' }
      ],
      selectedType: 'success'
    }
  },

  methods: {
    activateProp (compare) {
      return compare === this.selectedType
    }
  }
}
</script>
