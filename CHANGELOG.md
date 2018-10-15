# 1.2.1 (2018-10-15)

## Fixes

Global Styles: Removed instances of :not(:first-child) from elements.scss, this previously created a visual issue when adding an icon to a section header component

# 1.2.0 (2018-10-09)

## Fixes

Table: Added ability to create a footer for your table using a 'table-footer' slot [6f564a1](https://github.com/AmpleOrganics/Blaze.vue/pull/84/commits/6f564a1af6984394c6968b69e9e4c366cf901b42)

Table: Provided support for an empty table state, and ability to display descriptive text [e5f6225](https://github.com/AmpleOrganics/Blaze.vue/pull/193/commits/e5f6225dc17fe583df164ca7872c8c4928a87de8)

Table: Improved styling, including a new prop for rendering condensed tables, 'condensed' [e48b1fd](https://github.com/AmpleOrganics/Blaze.vue/pull/186/commits/e48b1fdacb04e363ee14e9152071bedd9d95a4c1) &
[92190ee](https://github.com/AmpleOrganics/Blaze.vue/pull/164/commits/92190eebbd7a952d19f3a43401825b1332f31784)

Button: Prevented colours from changing on hover [583e69f](https://github.com/AmpleOrganics/Blaze.vue/pull/182/commits/583e69f66f93f7ba6a87c8b2f1a1b8541e3a720a)

Paginate: Improved styling [419a340](https://github.com/AmpleOrganics/Blaze.vue/pull/184/commits/419a3401955ae9851a47de9bc50d00c597fe6cf3)

Modal: Added a slot for toolbar, 'modal-toolbar'[419a340](https://github.com/AmpleOrganics/Blaze.vue/pull/184/commits/419a3401955ae9851a47de9bc50d00c597fe6cf3)

Modal: Added 'small' or 'large' props to change modal size [94d4cb7](https://github.com/AmpleOrganics/Blaze.vue/pull/158/commits/94d4cb73f06da54b470d3cba994418d2d85d3425)

Alert: Improved sliding transitions [ddbe464](https://github.com/AmpleOrganics/Blaze.vue/pull/183/commits/ddbe464aa2df4de7dfb881591556ae44e14815ef)

Input: Added prop for passing in instruction text that will appear below the input [567a3c7](https://github.com/AmpleOrganics/Blaze.vue/pull/190/commits/567a3c7c05d450a8c778e106a33d49c433e3cee1)

Global Styling: Updated the styling for the H2 element and the H3 element [411f64c](https://github.com/AmpleOrganics/Blaze.vue/pull/206/commits/411f64c5a4b71062093d0df8db6412626aef7599)

Documentation: Recreated documentation using Blaze Components, addressed console warnings and corrected typos
[905a0c5](https://github.com/AmpleOrganics/Blaze.vue/pull/192/commits/905a0c5ed9deb861b46976732712c46b094d6e42) &
[ea22139](https://github.com/AmpleOrganics/Blaze.vue/pull/165/commits/ea22139eff5de4df67faf0af582688377ba4fa98) &
[438efc1](https://github.com/AmpleOrganics/Blaze.vue/pull/165/commits/438efc1d0c728308b559e4293099f3b8383fde4d) &

## New

Callout: Created a new component for displaying callout text that can be contextually displayed by passing in 'info', 'success','caution', or 'destructive' as props [3961b46](https://github.com/AmpleOrganics/Blaze.vue/pull/86/commits/3961b46c9a552c127f08a4052aabd93107b89a64)

Tooltip: Added a tooltip component to display helpful text [53d3633](https://github.com/AmpleOrganics/Blaze.vue/pull/162/commits/53d363385653ed08cef573065d850f3a11e06d24)

## Breaking Changes

Modal: Modal size prop no longer accept 'sm', 'md', or 'lg' they now accept 'small', 'medium' and 'large' [94d4cb7](https://github.com/AmpleOrganics/Blaze.vue/pull/158/commits/94d4cb73f06da54b470d3cba994418d2d85d3425)

# 1.1.2 (2018-09-05)

## Fixes

Breadcrumbs: Separator logic improved so that there are no longer extra separators when having no "active" path [8a18945](https://github.com/AmpleOrganics/Blaze.vue/pull/178/commits/8a18945e29459071c213652b23bacdb99f5461c1)

Breadcrumbs: new styling to make it easier to discern if a breadcrumb is clickable or not [51e2051](https://github.com/AmpleOrganics/Blaze.vue/pull/178/commits/51e205136fdee25281e6e3cfb5a68e6e3204010c)

Dropdown: fix positioning of dropdown relative to its parent element [e192a84](https://github.com/AmpleOrganics/Blaze.vue/pull/178/commits/e192a841e6639a8f1ff6addb572bf24b24baff7d)

Dropdown: Improved css styling [782c48f](https://github.com/AmpleOrganics/Blaze.vue/pull/178/commits/782c48fc7eb5ba3be8db97e762dcf3a55c13c89b)

## New

v-click-outside directive that can trigger a vue method when clicked outside of the attached element (note: cannot use function parameters when calling vue methods) ie: `v-click-outside="closeEvent('param')"`

# 1.1.1 (2018-08-28)

## Fixes

add dropdown to install script

# 1.1.0 (2018-08-27)

### New Components!

Check out the Docs for each of the components to see basic implementation and demo of the components!

Breadcrumbs: A breadcrumb component to easily navigate your page!  FIXES:[#104](https://github.com/AmpleOrganics/Blaze.vue/issues/104), [PR #154](https://github.com/AmpleOrganics/Blaze.vue/pull/154)

Header Toolbar: This is a toolbar component with its intended use being at the top of the page for navigation and app controls [PR #163](https://github.com/AmpleOrganics/Blaze.vue/pull/163)

Dropdown: Simple dropdown component (not to be confused with a select component) [PR #166](https://github.com/AmpleOrganics/Blaze.vue/pull/166)

### Breaking changes

None!

### fixes

Alert now properly goes to the top of the page at all times [PR 156](https://github.com/AmpleOrganics/Blaze.vue/pull/156)

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
