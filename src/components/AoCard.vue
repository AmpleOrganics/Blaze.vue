<template>
  <div class="card">
    <div
      class="card-header"
      v-if="title">
      <h2 class="card-title">{{ title }}</h2>
      <div class="card-header-toolbar">
        <slot name="card-header-toolbar"/>
      </div>
    </div>
    <div class="card-body">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AoCard',
  props: {
    title: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang='scss' scoped>
.card {
  background-color: #fff;
  border: 1px solid #dcdedf;
  border-radius: 3px;
  margin-bottom: 15px;
  padding: 0;
}

.card-body {
  margin-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
}

.card-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #dcdedf;
}

.card-title {
  margin: 0;
  font-size: 28px;
  font-weight: 200;
  display: inline-block;
}

.card-header-toolbar {
  margin-left: auto;

  & .form-group {
    display: inline-block;
  }

  & * {
    margin-left: 10px;
  }
}
</style>
