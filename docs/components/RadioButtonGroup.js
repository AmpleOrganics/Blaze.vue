export default {
  header: 'Radio Button Group',
  description: 'A group of radio inputs styled as buttons',
  snippet:
        `<ao-radio-button-group
    :options="radioOptions"
    :name="'radio'"
    v-model="selectedRadio"
  />

  data () {
    return {
      radioOptions: [
        { name: 'Tandy', value: 'Tandy' },
        { name: 'Carol', value: 'Carol' },
        { name: 'Gail', value: 'Gail' },
        { name: 'Erica', value: 'Erica' },
        { name: 'Todd', value: 'Todd' }
      ],
      selectedRadio: null
    }
  }`,
  apiRows: [
    { name: 'options', type: 'Array, required', description: 'this props provides radio options for the radio buttons, check the example for how they should be structured' },
    { name: 'name', type: 'String, required', description: 'this prop links each radio button together' }
  ]

}
