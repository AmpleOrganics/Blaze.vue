# 1.0.0 (2018-08-13)

### Notes

Initial public release

### Features

* select: Placeholder prop is now used so easily create a placeholder (eg. 'Select One') with a value of `null`
* select: default can now be set by setting your v-model related data attribute
* table: can now set default sort by and order using props `sortBy` and `order` (order only takes 'asc' or 'desc')
* fileUpload: added name prop for usage of html's `name` property

### Breaking Changes

* change all instances of `has-error` and `hasError` to `invalid` to better represent the prop and css class
* internal changes for component layout in components (less unnecessary elements) can break e2e tests/custom css
* renamed many classes to follow [BEM](http://getbem.com/naming/) more closely
* select: options are now passed in as the default slot instead of a prop
* select: default prop removed in favour of setting your data tied to the default value of the select box
* input: remove many html based validations (min, max, required, etc) in favour of using a validation library or custom solution
