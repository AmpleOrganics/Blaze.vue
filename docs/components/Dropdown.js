export default {
  header: 'Dropdown',
  description: 'This is a customizable dropdown component.',
  snippet:
        `<ao-dropdown
  :show-dropdown="showDropdown"
  :size="'large'"
  :direction="'left'"
>
  <ao-dropdown-item
    slot="dropdown-items"
    v-for="(link, index) in links"
    class="ao-dropdown__link"
    :key="index"
    :href="link.url"
  >
    {{ link.title }}
  </ao-dropdown-item>
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
    { name: 'showDropdown', type: 'Boolean', default: 'false', description: 'Hides or un-hides the dropdown.' },
    { name: 'size', type: 'String (medium or large)', default: 'medium', description: 'Adjusts size of dropdown.' },
    { name: 'direction', type: 'String (left or right)', default: 'left', description: 'Shows dropdown on left or right side' }
  ]
}
