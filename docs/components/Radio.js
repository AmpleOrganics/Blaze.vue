export default {
  header: 'Radio',
  description: 'This is a customizable radio component.',
  snippet:
        `<ao-radio
  v-for="radio in radios"
  :id="radio.label"
  :key="radio.value"
  v-model="selectedRadio"
  :val="radio.value"
  name="favouriteCharacter"
  :label="radio.label"
  :info-text="radio.infoText"
/>

data() {
  return {
    radios: [
      { id: 'tandy', label: 'Tandy', value: 'Tandy', infoText: 'Tandy is...' },
      { id: 'carol', label: 'Carol', value: 'Carol', infoText: "Carol is..." },
      { id: 'gail', label: 'Gail', value: 'Gail' },
      { id: 'erica', label: 'Erica', value: 'Erica' },
      { id: 'todd', label: 'Todd', value: 'Todd' }
    ],
    selectedRadio: 'Tandy'
  }
}`,
  apiRows: [
    { name: 'val', type: '[String, Number, Boolean], required', default: 'null', description: 'This prop defines the actual value of a radio button.' },
    { name: 'label', type: 'Boolean', default: 'false', description: 'This prop defines the label of the radio button.' },
    { name: 'showLabel', type: 'Boolean', default: 'true', description: 'Allows hiding the label text' },
    { name: 'infoText', type: 'string', default: 'null', description: 'For instructional UI copy pertaining to the radio option' },
    { name: 'disabled', type: 'Boolean', default: 'false', description: 'Disables interaction with the component.' }
  ]
}
