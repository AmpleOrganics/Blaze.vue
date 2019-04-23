export default {
  header: 'Select',
  description: 'This is a customizable select component.',
  snippet:
        `<ao-select
  v-model="selected"
  :label="'Label'"
  :placeholder="'Placeholder'"
>
  <option
    v-for="option in options"
    :value="option.value"
  >
    {{option.name}}
  </option>
</ao-select>

data () {
  return {
    selected: null,
    options: [
      { value: 'Charmander', name: 'Charmander' },
      { value: 'Pikachu', name: 'Pikachu' },
      { value: 'Squirtle', name: 'Squirtle' },
      { value: 'Bulbasaur', name: 'Bulbasaur' }
    ]
  }
}`,
  apiRows: [
    { name: 'value', type: 'String, Number, Boolean', default: 'null', description: 'This prop defines the selected value.' },
    { name: 'label', type: 'String, required', default: 'null', description: 'This prop defines the label of the select.' },
    { name: 'name', type: 'String', default: 'null', description: 'This prop defines the name of the select.' },
    { name: 'showLabel', type: 'Boolean', default: 'true', description: 'This prop defines if the select label will be shown or not.' },
    { name: 'instructionText', type: 'String', default: 'null', description: 'Instruction text to show below the input.' },
    { name: 'invalid', type: 'Boolean', default: 'false', description: 'This prop defines the select to be invalid.' },
    { name: 'invalidMessage', type: 'String', default: 'false', description: 'Adds invalid messages below select' },
    { name: 'disabled', type: 'Boolean', default: 'false', description: 'This prop disables the select.' },
    { name: 'disableAll', type: 'Boolean', default: 'false', description: 'Disables interaction with the component, greys out label and instruction text.' },
    { name: 'placeholder', type: 'String', default: 'null', description: 'This prop defines the placeholder of the select.' },
    { name: 'size', type: 'String (null or small)', default: 'null', description: 'Pass in \'small\' to decrease the size of the input field.' }
  ]
}
