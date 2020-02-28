export default {
  header: 'Popover',
  description: 'This is a customizable popover component.',
  snippet:
`<ao-popover
  position="bottom"
  text="Search the database based on your customized query"
>
  <ao-input
    type="text"
    label="Search"
    :show-label="false"
    placeholder="Search here"
  />
</ao-popover>`,
  apiRows: [
    { name: 'position', type: 'String (bottom, left, top or right)', default: 'bottom', description: 'Shows popover at selected position.' },
    { name: 'text', type: 'String', required: true, default: 'null', description: 'Text for popover.' }
  ]
}
