export default {
  header: 'Section Header',
  description: 'This is a customizable section header component containing a title, and optional subtitle and icon/html props.',
  snippet:
        `<ao-section-header
  :icon-class="'custom-glyph-clients'"
  :title="'This is the section header title'"
  :subtitle="'The subtitle goes here'"
>
  <template slot="section-header-title">
    <span class="icon">
      🍔
    </span>
  </template>
</ao-section-header>`,
  apiRows: [
    { name: 'title', type: 'String, required', default: 'null', description: 'Defines the title of the section header.' },
    { name: 'subtitle', type: 'String', default: 'null', description: 'Defines the subtitle of the section header.' },
    { name: 'iconHtml', type: 'String', default: 'null', description: 'Accepts html elements or html codes for icons.' },
    { name: 'iconClass', type: 'String', default: 'null', description: 'Accepts icon class components e.g. glyphicons.' }
  ]
}
