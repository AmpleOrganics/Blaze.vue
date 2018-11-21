export default {
  header: 'Radio',
  description: 'This is a customizable radio component.',
  snippet:
        `<ao-radio
  v-for="radio in radios"
  :key="radio.value"
  :val="radio.value"
  :name="radio.name"
  :label="radio.name"
  v-model="selectedRadio"
/>

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
}`,
  apiRows: [
    { name: 'val', type: '[String, Number, Boolean], required', default: 'null', description: 'This prop defines the actual value of a radio button.' },
    { name: 'disabled', type: 'Boolean', default: 'false', description: 'This prop defines if the modal will ve disabled.' },
    { name: 'label', type: 'Boolean', default: 'false', description: 'This prop defines the label of the radio button.' }
  ]
}
