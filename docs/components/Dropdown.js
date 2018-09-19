export default {
  header: 'Dropdown',
  description: 'This is a customizable dropdown component.',
  snippet:
        `<ao-dropdown :show-dropdown="showDropdown">
  <a
    slot="dropdown-items"
    v-for="(link, index) in links"
    class="ao-dropdown__link"
    :key="index"
    :href="link.url">
    {{ link.title }}
  </a>
</ao-dropdown>

data () {
  return {
    links: [
      { url: "https://google.com", title: "Google" },
      { url: "https://facebook.com", title: "Facebook" }
    ],

    showDropdown: true
  }
}`,
  apiRows: [
    { name: 'showDropdown', type: 'Boolean', default: 'false', description: 'Hides or un-hides the dropdown.' }
  ]
}
