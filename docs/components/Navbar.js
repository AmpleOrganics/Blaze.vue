export default {
  header: 'Navbar',
  description: 'This is a customizable navbar component.',
  snippet:
        `<ao-navbar>
  <li
    v-for="route in routes"
    :key="route.path">
    <router-link :to="route.path" >{{ route.name }}</router-link>
  </li>
</ao-navbar>

routes: [
  { path: '#examples', name: 'Examples'},
  { path: '#code-example', name: 'Code Example'},
  { path: '#props', name: 'Props'},
]`,
  apiRows: []
}
