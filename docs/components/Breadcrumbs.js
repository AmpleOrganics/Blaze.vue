export default {
  header: 'Breadcrumbs',
  description: 'This is a customizable breadcrumbs component.',
  snippet:
        `export default {
  data () {
    return {
      paths: [
        { name: 'Home', path: '/' },
        { name: 'Badge', path: 'badge' },
        { name: 'Breadcrumbs', active: true }
      ]
    }
  }
}`,
  apiRows: [
    { name: 'separator', type: 'String', default: "'/'", description: 'Divides the different paths by whatever string you would like!' },
    { name: 'paths', type: 'Array', required: true, default: '', description: 'Array of Objects that contain name, path and active props for each path. Check the Code Example for more info.' }
  ]
}
