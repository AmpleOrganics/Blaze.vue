# Dropdown

This is a customizable dropdown component.

## Examples

<Doc-Dropdown/>

## Code Example
```html
<ao-dropdown :show-dropdown="showDropdown">
  <a
    slot="dropdown-items"
    v-for="(link, index) in links"
    class="ao-dropdown__link"
    :key="index"
    :href="link.url">
    {{link.title}}
  </a>
</ao-dropdown>
```

```js
data () {
  return {
    links: [
      { url: "https://google.com", title: "Google"},
      { url: "https://facebook.com", title: "Facebook"}
    ],

    showDropdown: true
  }
}
```

## Props

| Name         | Type     | Default | Description                                                           |
|:-------------|:---------|:---------|:----------------------------------------------------------------------|
| showDropdown | Boolean | false | Hides or unhides the dropdown. |

