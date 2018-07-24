# Paginate
This is a pagination component allowing you to navigate between pages.

## Examples

<Doc-Paginate/>

## Code Example
```html
<ao-paginate
  :total-pages="5"
  @paginate="paginate"
/>
```

```js
methods: {
  // paginate emits current page number then allowing to do whatever you want with that info
  paginate (page) {
    this.currentPage = page
  }
}

```

## Props

| Name         | Type     | Default | Description                                                           |
|:-------------|:---------|:---------|:----------------------------------------------------------------------|
| totalPages | Number | 1 | Defines the total number of pages through which the pagination can go. |
| @paginate | event | N/A | Emits the current page number as it changes. |

