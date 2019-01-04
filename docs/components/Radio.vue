<template>
  <Layout>
    <template slot="description">
      <span v-html="description" />
    </template>

    <div slot="example">
      <div class="component-example">
        <div class="component-example__display">
          My favourite character is {{ selectedRadio }}
        </div>
        <ao-radio
          v-for="radio in radios"
          :key="radio.value"
          v-model="selectedRadio"
          :val="radio.value"
          :name="radio.name"
          :label="radio.name"
        />
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
        { name: 'Tandy', value: 'Tandy' },
        { name: 'Carol', value: 'Carol' },
        { name: 'Gail', value: 'Gail' },
        { name: 'Erica', value: 'Erica' },
        { name: 'Todd', value: 'Todd' }
      ],
      selectedRadio: 'Tandy'
    }
  }
}
</script>
