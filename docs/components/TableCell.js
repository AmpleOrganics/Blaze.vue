export default {
  header: 'Table Cell',
  description: 'This styles and sizes inputs and buttons consistently.',
  snippet:
`<ao-table-cell content="button" >
      <ao-tooltip text="Archive">
        <ao-button>
          <i class="md-icon__archive" />
        </ao-button>
      </ao-tooltip>
      <ao-tooltip text="Download PDF">
        <ao-button>
          <i class="md-icon__get_app" />
        </ao-button>
      </ao-tooltip>
      <ao-tooltip text="Actions">
        <ao-button>
          <i class="md-icon__more_horiz" />
        </ao-button>
      </ao-tooltip>
    </ao-table-cell>`,
  apiRows: [
    { name: 'content', type: 'String', default: 'null', description: 'This prop will style either a button or an input appropriately.' },
    { name: 'alignRight', type: 'Boolean', default: 'false', description: 'This prop will align the text in the table cell to the right.' }
  ]
}
