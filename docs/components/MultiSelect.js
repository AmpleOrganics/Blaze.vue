export default {
  header: 'Multi Select',
  description: 'This is a customizable multi select component.',
  snippet:
  `<ao-multi-select
  :label="label"
  :placeholder="placeholder"
  :invalid="invalid"
  :invalid-message="invalidMessage"
  :disabled="disabled"
  :disable-all="disableAll"
  :show-label="showLabel"
  :selected="selectedItemNames"
  @clear="clear"
>
  <ao-checkbox
    v-for="option in options"
    :key="option.name"
    v-model="selected"
    :checkbox-value="option.value"
    :checkbox-label="option.name"
  />
</ao-multi-select>

data () {
  return {
    label: 'Acceptable Pokemon(s)',
    selected: [],
    placeholder: 'Select Pokemon(s)',
    invalid: false,
    showLabel: true,
    disabled: false,
    disableAll: false,
    invalidMessage: 'INVALID!',
    options: [
      { value: 'charmander', name: 'Charmander' },
      { value: 'pikachu', name: 'Pikachu' },
      { value: 'squirtle', name: 'Squirtle' },
      { value: 'bulbasaur', name: 'Bulbasaur' }
    ]
  }
}

computed: {
  selectedItemNames () {
    return this.options.filter(option => this.selected.includes(option.value))
      .map(item => item.name)
  }
},

methods: {
  clear () {
    this.selected = []
  }
}`,
  apiRows: [
    { name: 'label', type: 'String, required', default: 'null', description: 'This prop defines the label of the multi select.' },
    { name: 'selected', type: 'Array', default: '[]', description: 'This prop defines the selected options.' },
    { name: 'showLabel', type: 'Boolean', default: 'true', description: 'This prop defines if the multi select label will be shown or not.' },
    { name: 'clearAllSelectionsLabel', type: 'String, optional', default: 'Clear all selections', description: 'This prop defines the label of the clear all selections button.' },
    { name: 'instructionText', type: 'String', default: 'null', description: 'Instruction text to show below the input.' },
    { name: 'invalid', type: 'Boolean', default: 'false', description: 'This prop defines the multi select to be invalid.' },
    { name: 'invalidMessage', type: 'String', default: 'false', description: 'Adds invalid messages below multi select' },
    { name: 'disabled', type: 'Boolean', default: 'false', description: 'This prop disables the multi select.' },
    { name: 'disableAll', type: 'Boolean', default: 'false', description: 'Disables interaction with the component, greys out label and instruction text.' },
    { name: 'placeholder', type: 'String', default: 'null', description: 'This prop defines the placeholder of the multi select.' },
    { name: 'size', type: 'String (null or small)', default: 'null', description: 'Pass in \'small\' to decrease the size of the input field.' }
  ]
}
