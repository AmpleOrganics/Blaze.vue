export default {
  header: 'Header Toolbar',
  description: 'This is a header toolbar component intended for top-level display, containing all app-wide controls.',
  snippet:
    `<ao-header-toolbar
  :title="'Ribbitting Technologies'"
  :icon-html="'🐸'"
  fixed>
  <span>🍔</span>
  <span>Logout</span>
</ao-header-toolbar>`,
  apiRows: [
    { name: 'title', type: 'String, required', default: 'null', description: 'Defines the header toolbar title.' },
    { name: 'titleClicked', type: 'Function', default: 'null', description: 'Callback function to invoke when header toolbar title is clicked.' },
    { name: 'iconHtml', type: 'String', default: 'null', description: 'Accepts html elements or html codes for icons.' },
    { name: 'iconUrl', type: 'String', default: 'null', description: 'Accepts an image URL.' },
    { name: 'iconClass', type: 'String', default: 'null', description: 'Accepts icon class components e.g. material icons.' },
    { name: 'fixed', type: 'Boolean', default: 'false', description: 'Adds a class to fix the header toolbar in position.' }
  ]
}
