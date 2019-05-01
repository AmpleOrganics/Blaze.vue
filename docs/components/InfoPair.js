export default {
  header: 'Info Pair',
  description: 'This is a customizable info pair component.',
  snippet:
`<ao-info-pair
  :label="label"
  :label-html="labelHtml"
>
  {{ info }}
</ao-info-pair>`,
  apiRows: [
    { name: 'label', type: 'String', default: '-', description: 'Label for info pair.' },
    { name: 'label-html', type: 'String', default: '-', description: 'HTML label for info pair.' }
  ]
}
