# Navbar

This is a customizable navbar component.

## Examples

<Doc-Navbar/>

## Code Example
```html
<ao-navbar>
  <li
    v-for="route in routes"
    :key="route.path">
    <router-link :to="route.path" >{{ route.name }}</router-link>
  </li>
</ao-navbar>
```

```js
routes: [
  { path: '#examples', name: 'Examples'},
  { path: '#code-example', name: 'Code Example'},
  { path: '#props', name: 'Props'},
]
```

## Props

There are no props for this component.
