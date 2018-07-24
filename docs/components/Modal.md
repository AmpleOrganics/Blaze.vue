# Modal

This is a customizable modal component.

## Examples

<Doc-Modal/>

## Code Example
```html
<ao-modal
  v-if="showModal"
  :header-text="'This is the modal title'"
  @modalClose="toggleModal">
  <div slot="modal-body">
    <p>And I live in the body of the modal</p>
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
| headerText | String, required | null | Defines the modal title. |
| destructive | Boolean | false | Adds a class to indicate a destructive action eg. deletion, permanent irreversible action. |
| caution | Boolean | false | Adds a class to indicate a cautious action eg. reversible powerful change. |

