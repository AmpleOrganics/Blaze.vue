# Breadcrumbs

This is a breadcrumb component. It uses `router-link` from [vue-router](https://router.vuejs.org/api/#router-link "Official Vue router Docs") for navigation, therefore is a requirement for this component

## Examples

<Doc-Breadcrumbs/>

## Code Example

```html
<ao-breadcrumb :paths="paths"/>
```

```js
export default {
  data () {
    return {
      paths: [
        { name: 'Home', path: '/' },
        { name: 'Somewhere', path: '/place' },
        { name: 'current', active: true }
      ]
    }
  }
}
```

## Props

| Name        | Type    | Default | Description |
|:------------|:--------|:------|:--------------|
| separator   | String  | '/'   | Divides the different paths by whatever string you would like! |
| paths       | Array, required | null | Array of Objects that contain name, path and active props for each path. Check the Code Example for more info  |
