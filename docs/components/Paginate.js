export default {
  header: 'Paginate',
  description: 'This is a pagination component allowing you to navigate between pages.',
  snippet:
  `<ao-paginate
  :total-pages="3"
  :current-page.sync="currentPage"
/>

data: {
  currentPage: 1
}`,
  apiRows: [
    { name: 'totalPages', type: 'Number', default: '1', description: 'Defines the total number of pages through which the pagination can go.' },
    { name: 'currentPage', type: 'Number', default: '1', description: 'Defines the current page that you are on.' }
  ]
}
