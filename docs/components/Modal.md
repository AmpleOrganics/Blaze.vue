# Modal

This is a customizable modal component

## Examples

<Doc-Modal/>

## Code Example
```html
<ao-modal
  v-if="showModal"
  :header-text="'Header Text'"
  @modalClose="toggleModal">
  <div slot="modal-body">
    <p>I am content</p>
  </div>
  <div slot="modal-footer">
    <ao-button
      primary
      @click.native="toggleModal">
      Close
    </ao-button>
  </div>
</ao-modal>
```

## Props

| Name         | Type     | Default | Description                                                           |
|:-------------|:---------|:---------|:----------------------------------------------------------------------|
| headerText | String, required | null | This prop defines the header text in the modal. |
| destructive | Boolean | false | This prop defines if the modal will appear destructive. |
| caution | Boolean | false | This prop defines if the modal will appear cautious. |

