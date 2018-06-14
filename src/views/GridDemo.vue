<template>
  <div>
    <container class="demo-container">
      <h2>Normal Container - Three Columns</h2>
      <grid>
        <grid-item
          size="1/3"
          class="demo-item">grid-item size="1/3"</grid-item>
        <grid-item
          size="1/3"
          class="demo-item">grid-item size="1/3"</grid-item>
        <grid-item
          size="1/3"
          class="demo-item">grid-item size="1/3"</grid-item>
      </grid>
    </container>

    <container
      width="100%"
      class="demo-container">
      <h2>Normal Container - Five Uneven Columns</h2>
      <grid :rwd="{mobile: 'stack'}">
        <grid-item
          size="1/10"
          class="demo-item">grid-item size="1/10"</grid-item>
        <grid-item
          size="2/10"
          class="demo-item">grid-item size="2/10"</grid-item>
        <grid-item
          :rwd="{mobile: '1/1'}"
          size="4/10"
          class="demo-item"
        >
          grid-item size="4/10 // MOBILE 1/1"
        </grid-item>
        <grid-item
          size="2/10"
          class="demo-item">grid-item size="2/10"</grid-item>
        <grid-item
          size="1/10"
          class="demo-item">grid-item size="1/10"</grid-item>
      </grid>
    </container>

    <container class="demo-container">
      <h2>Normal Container - Single Column</h2>
      <grid>
        <grid-item
          size="1/1"
          class="demo-item">grid-item size="1/1"</grid-item>
      </grid>
    </container>

    <container class="demo-container">
      <h2>Vertically Stacked Container - Three Grid Items</h2>
      <grid direction="stack">
        <grid-item class="demo-item">grid-item (no size)</grid-item>
        <grid-item class="demo-item">grid-item</grid-item>
        <grid-item class="demo-item">grid-item</grid-item>
      </grid>
    </container>
  </div>
</template>

<script>
import aoSelect from '@/components/lib/AoSelect.vue'

export default {
  name: 'GridDemo',
  components: {
    aoSelect
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected: 1,
      options: [{'name': 'look at this', 'value': 1}, {'name': 'look at this2', 'value': 2}, {'name': 'look at this3', 'value': 3}]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.demo-container:nth-child(1) {
  background-color: rgb(180, 244, 231);

  .demo-item:nth-child(1) {
    background-color: rgba(255, 255, 255, 0.35);
  }

  .demo-item:nth-child(2) {
    background-color: rgba(255, 255, 255, 0.65);
  }

  .demo-item:nth-child(3) {
    background-color: rgba(255, 255, 255, 0.95);
  }
}

.demo-container:nth-child(2) {
  background-color: rgb(244, 180, 180);

  .demo-item:nth-child(1), .demo-item:nth-child(5) {
    background-color: rgba(255, 255, 255, 0.35);
  }

  .demo-item:nth-child(2), .demo-item:nth-child(4) {
    background-color: rgba(255, 255, 255, 0.65);
  }

  .demo-item:nth-child(3) {
    background-color: rgba(255, 255, 255, 0.95);
  }
}

.demo-container:nth-child(3) {
  background-color: rgb(229, 180, 244);

  .demo-item:nth-child(1) {
    background-color: rgba(255, 255, 255, 0.35);
  }
}

.demo-container:nth-child(4) {
  background-color: rgb(180, 244, 187);

  .demo-item:nth-child(1) {
    background-color: rgba(255, 255, 255, 0.35);
  }

  .demo-item:nth-child(2) {
    background-color: rgba(255, 255, 255, 0.65);
  }

  .demo-item:nth-child(3) {
    background-color: rgba(255, 255, 255, 0.95);
  }
}
</style>
