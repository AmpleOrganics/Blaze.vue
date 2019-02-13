<template>
  <layout>
    <template slot="description">
      <span v-html="description" />
    </template>

    <div slot="example">
      <div class="component-example">
        <ao-callout
          v-if="showCallout"
          :dismissible="selectedDismissible"
          :icon-class="iconClass"
          :success="selectedStyle === 'success'"
          :caution="selectedStyle === 'caution'"
          :destructive="selectedStyle === 'destructive'"
          :info="selectedStyle === 'info'"
          @hideCallout="hideCallout"
        >
          <p>{{ calloutText }}</p>
        </ao-callout>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="calloutText"
            :type="'text'"
            :label="'Callout Text'"
          />
        </div>
        <div class="component-controls__group">
          <ao-input
            v-model="iconClass"
            :type="'text'"
            :label="'Callout Icon'"
          />
        </div>
        <br>
        <div class="component-controls__group">
          <label>Callout Style</label>
          <ao-radio
            v-for="style in calloutStyles"
            :key="style.value"
            v-model="selectedStyle"
            :val="style.value"
            :name="style.name"
            :label="style.name"
          />
        </div>
        <br>
        <div class="component-controls__group">
          <label>Callout Is Dismissible</label>
          <ao-radio
            v-for="radio in dismissibleRadios"
            :key="radio.value"
            v-model="selectedDismissible"
            :val="radio.value"
            :name="radio.name"
            :label="radio.name"
          />
        </div>
        <br>
        <div class="component-controls__group">
          <label>Show Or Hide Callout</label>
          <ao-radio
            v-for="radio in showCalloutRadios"
            :key="radio.value"
            v-model="showCallout"
            :val="radio.value"
            :name="radio.name"
            :label="radio.name"
            :disabled="!selectedDismissible"
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
  </layout>
</template>

<script>
import Layout from '../layout/Layout'
import ApiTable from '../helpers/ApiTable'
import CalloutDocumentation from './Callout'

export default {
  components: {
    Layout,
    ApiTable
  },

  data () {
    return {
      ...CalloutDocumentation,
      showCallout: true,
      iconClass: 'md-icon__check',
      calloutStyles: [
        { name: 'success', value: 'success' },
        { name: 'destructive', value: 'destructive' },
        { name: 'caution', value: 'caution' },
        { name: 'info', value: 'info' }
      ],
      selectedStyle: 'success',
      dismissibleRadios: [
        { name: 'dismissible', value: true },
        { name: 'not dismissible', value: false }
      ],
      showCalloutRadios: [
        { name: 'show callout', value: true },
        { name: 'hide callout', value: false }
      ],
      selectedDismissible: false,
      calloutText: 'This is a callout'
    }
  },

  methods: {
    hideCallout () {
      this.showCallout = false
    }
  }
}
</script>

<style scoped>

</style>
