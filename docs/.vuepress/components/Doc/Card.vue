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
        <ao-button>
          Action 2
        </ao-button>
      </ao-card>
    </div>
    <div class="component-controls__group">
      <ao-input
        v-model="titleText"
        :type="'text'"
        label="Card Title Text" />
      <ao-input
        v-model="slotText"
        :type="'text'"
        label="Card Content Text" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      titleText: 'Title goes here',
      slotText: 'She sells seashells by the sea shore'
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
