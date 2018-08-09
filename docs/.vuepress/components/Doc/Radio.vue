<template>
  <div>
    <div class="component-example">
      <div class="component-example__display"> My favourite character is {{selectedRadio}} </div>
      <ao-radio
        v-for="radio in radios"
        :key="radio.value"
        :val="radio.value"
        :name="radio.name"
        :label="radio.name"
        v-model="selectedRadio"/>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
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

<style>
.component-example__display {
  padding: 15px 5px;
}
</style>
