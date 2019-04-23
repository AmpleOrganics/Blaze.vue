<template>
  <Layout>
    <template slot="description">
      <span v-html="description" />
    </template>

    <div slot="example">
      <div class="component-example">
        <ao-button
          :primary="activateProp('primary')"
          :destructive="activateProp('destructive')"
          :caution="activateProp('caution')"
          :subtle="activateProp('subtle')"
          :naked="activateProp('naked')"
          :link="activateProp('link') || activateProp('text-only-link')"
          :text-only="activateProp('text-only') || activateProp('text-only-link')"
          :small="activateProp('small')"
          :large="activateProp('large')"
          :jumbo="activateProp('jumbo')"
          :disabled="disabled"
        >
          <i
            v-if="materialIcon"
            class="material-icons"
          >
            get_app
          </i>
          {{ buttonText }}
        </ao-button>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="buttonText"
            :type="'text'"
            :label="'Button Text'"
          />
        </div>
        <div class="component-controls__group">
          <ao-select
            v-model="selectedContext"
            label="Context"
          >
            <option
              v-for="(prop, index) in contextProps"
              :key="index"
              :value="prop.value"
            >
              {{ prop.name }}
            </option>
          </ao-select>
        </div>
        <div class="component-controls__group">
          <ao-select
            v-model="selectedStyle"
            label="Style"
          >
            <option
              v-for="(prop, index) in styleProps"
              :key="index"
              :value="prop.value"
            >
              {{ prop.name }}
            </option>
          </ao-select>
        </div>
        <div class="component-controls__group">
          <ao-select
            v-model="selectedSize"
            label="Size"
          >
            <option
              v-for="(prop, index) in sizeProps"
              :key="index"
              :value="prop.value"
            >
              {{ prop.name }}
            </option>
          </ao-select>
        </div>
        <div class="component-controls__group">
          <ao-checkbox
            v-model="materialIcon"
            :checkbox-value="true"
            checkbox-label="Material Icon"
          />
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
import ButtonDocumentation from './Button'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...ButtonDocumentation,
      buttonText: 'I\'m a button',
      contextProps: [
        { name: 'Default', value: null },
        { name: 'Primary', value: 'primary' },
        { name: 'Destructive', value: 'destructive' },
        { name: 'Caution', value: 'caution' },
        { name: 'Subtle', value: 'subtle' },
        { name: 'Naked', value: 'naked' }
      ],
      selectedContext: null,
      sizeProps: [
        { name: 'Default', value: 'default' },
        { name: 'Small', value: 'small' },
        { name: 'Large', value: 'large' },
        { name: 'Jumbo', value: 'jumbo' }
      ],
      selectedSize: 'default',
      styleProps: [
        { name: 'Default', value: 'default' },
        { name: 'Link', value: 'link' },
        { name: 'Text Only', value: 'text-only' },
        { name: 'Text Only & Link', value: 'text-only-link' }
      ],
      selectedStyle: 'default',
      disabled: false,
      materialIcon: false
    }
  },

  methods: {
    activateProp (compare) {
      return [this.selectedContext, this.selectedSize, this.selectedStyle].includes(compare)
    }
  }
}
</script>
