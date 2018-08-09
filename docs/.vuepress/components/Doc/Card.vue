<template>
  <div>
    <div class="component-example">
      <ao-card
        :title="titleText">
        <p v-model="slotText">
          {{ slotText }}
        </p>
        <ao-button
          primary>
          Action 1
        </ao-button>
        <ao-button
          v-show="buttonTwo">
          Action 2
        </ao-button>
      </ao-card>
    </div>
    <div class="component-controls__group">
      <ao-input
        v-model="titleText"
        :type="'text'"
        label="Card Title" />
      <ao-input
        v-model="slotText"
        :type="'text'"
        label="Slot Elements" />
      <ao-checkbox
        v-model="buttonTwo"
        :checkbox-label="buttonActionLabel" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      titleText: 'Title goes here',
      slotText: 'She sells seashells by the sea shore',
      buttonTwo: false
    }
  },

  computed: {
    buttonActionLabel () {
      return this.buttonTwo ? 'Remove button component' : 'Add another button component'
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
