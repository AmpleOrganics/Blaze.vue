export default {
  header: 'Paginate',
  description: 'This is a pagination component allowing you to navigate between pages.',
  snippet:
        `<ao-paginate
  :total-pages="5"
  @paginate="paginate"
/>

methods: {
  // paginate emits current page number 
  paginate (page) {
    this.currentPage = page
  }
}`,
  apiRows: [
    { name: 'totalPages', type: 'Number', default: '1', description: 'Defines the total number of pages through which the pagination can go.' },
    { name: '@paginate', type: 'event', default: 'N/A', description: 'Emits the current page number as it changes.' }
  ]
}
