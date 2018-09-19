export default {
  header: 'Info Pair',
  description: 'This is a customizable info pair component.',
  snippet:
        `<ao-info-pair :label="label">
  {{ info }}
</ao-info-pair>`,
  apiRows: [
    { name: 'label', type: 'String, required', default: '-', description: 'Label for info pair.' }
  ]
}
