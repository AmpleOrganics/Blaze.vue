<template>
  <Layout>
    <template slot="description">
      <span v-html="description" />
    </template>

    <div slot="example">
      <div class="component-example">
        <label>
          My Favourite Character
        </label>
        <div>
          <ao-radio
            v-for="radio in radios"
            :id="radio.label"
            :key="radio.value"
            v-model="selectedRadio"
            :val="radio.value"
            name="favouriteCharacter"
            :label="radio.label"
            :info-text="radio.infoText"
          />
        </div>
        <ao-info-pair label="Output">
          {{ selectedRadio }}
        </ao-info-pair>
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
import RadioDocumentation from './Radio'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...RadioDocumentation,
      radios: [
        { id: 'tandy', label: 'Tandy', value: 'Tandy', infoText: 'Tandy is the original Phil Miller' },
        { id: 'carol', label: 'Carol', value: 'Carol', infoText: "Carol is Tandy's wife" },
        { id: 'gail', label: 'Gail', value: 'Gail' },
        { id: 'erica', label: 'Erica', value: 'Erica' },
        { id: 'todd', label: 'Todd', value: 'Todd' }
      ],
      selectedRadio: 'Tandy'
    }
  }
}
</script>
