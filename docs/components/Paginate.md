# Paginate
This is a pagination component allowing you to navigate between pages

<Doc-Paginate/>

## Code Example
```html
<ao-paginate
  :totalPages="5"
  @paginate="paginate"
/>
```

```js
methods: {
  // paginate emits current page number then allowing to do whatever you want with taht info
  paginate (page) {
    this.currentPage = page
  }
}

```

# Props

| Name         | Type     | Default | Description                                                           |
|:-------------|:---------|:---------|:----------------------------------------------------------------------|
| totalPage | Number | 1 | This prop defines the total amount of pages that pagination can go through. |
| @paginate | event | N/A | This bind emits current page number when it changes in the component. |

