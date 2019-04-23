export default {
  header: 'Tooltip',
  description: 'This is a customizable tooltip component.',
  snippet:
        `<ao-tooltip
  position="bottom"
  text="Tooltip text goes here"
  multiline
>
  <ao-button primary>Hover over me</ao-button>
</ao-tooltip>`,
  apiRows: [
    { name: 'position', type: 'String (bottom, left, top, right)', default: 'bottom', description: 'Shows tooltip at selected position.' },
    { name: 'text', type: 'String', default: 'null', description: 'Text for tool tip.' },
    { name: 'multiline', type: 'Boolean', default: 'false', description: 'Configure tooltip to be single line or multiline.' }
  ]
}
