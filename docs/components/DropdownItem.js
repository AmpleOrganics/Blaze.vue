export default {
  header: 'Dropdown Item',
  description: 'This is a customizable dropdown item component.',
  snippet:
`<ao-dropdown-item
 :infoText="'information text'"
>
  This is an item
</ao-dropdown-item>
`,
  apiRows: [
    { name: 'disabled', type: 'Boolean', default: 'false', description: 'Disables an item from being clicked and applies disabled styling.' },
    { name: 'infotext', type: 'String', default: 'null', description: 'For instructional UI copy pertaining to the drop down item.' }
  ]
}
