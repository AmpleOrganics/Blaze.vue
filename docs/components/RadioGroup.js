export default {
  header: 'Radio Group',
  description: 'This is an opinionated radio group using text and it\'s backgrounds as the radio',
  snippet:
        `<ao-radio-group
    :options="radioGroupOptions"
    v-model="radioGroupVal"
  />

  data () {
    return {
      radioGroupOptions: [
        { name: 'Tandy', value: 'Tandy' },
        { name: 'Carol', value: 'Carol' },
        { name: 'Gail', value: 'Gail' },
        { name: 'Erica', value: 'Erica' },
        { name: 'Todd', value: 'Todd' }
      ],
      selectedRadio: 'Tandy'
    }
  }`,
  apiRows: [
    { name: 'options', type: 'Array, required', description: 'this props is provides radio options for the radio group, check the example for how they should be structured' }
  ]

}
