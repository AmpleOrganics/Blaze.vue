<template>
  <Layout>
    <template slot="content">
      <div class="home">
        <h1>Blaze.vue</h1>

        <p>Hello! Thank you for choosing Blaze.vue.</p>

        <p>
          Blaze is a Vue 2.0 based component library made for developers and designers, and an open source project by the developers at <a href="#">
            Ample Organics
          </a>
        </p>

        <h2>Getting Started</h2>
        <h3>Installation Instructions</h3>
        <p>Install the package using npm/yarn</p>

        <pre class="blaze-docs-code-snippet">
yarn add blaze-vue
npm i blaze-vue
        </pre>

        <h3>Using in your application</h3>
        <p>Currently the only tested measure is using vue-cli/webpack based project</p>

        <p>In your main.js/index.js add the following lines</p>

        <pre class="blaze-docs-code-snippet">
import Blaze from 'blaze-vue'
import 'blaze-vue/dist/blaze-vue.css'

Vue.use(Blaze)
        </pre>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from '../../docs/layout/Layout'

export default {
  components: {
    Layout
  }
}
</script>
