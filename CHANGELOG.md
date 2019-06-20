# 3.4.0 (2019-06-20)

## New

Table: Create a maxHeight property for scrollable tables [b91c76f](https://github.com/AmpleOrganics/Blaze.vue/commit/b91c76f8daf67a5237b4985b9a28474503dd16dd)

MultiSelect: Add absolute positioning for dropdown [6b59095](https://github.com/AmpleOrganics/Blaze.vue/commit/6b59095e7d095632379698a30889acc3a24e8597)

# 3.3.0 (2019-06-18)

## Fixes

Table: add scrollable functionality [1c8ed93](https://github.com/AmpleOrganics/Blaze.vue/commit/1c8ed93f118d4edb3a9788ac6fb54da2e90748a4)

# 3.2.0 (2019-06-07)

## New

Table: add select and selectAll checkboxes [507d390](https://github.com/AmpleOrganics/Blaze.vue/commit/507d390a9d036e05668ee5242ce012a3f94e2903)

MultiSelect: added ao-multi-select component [4cd3c31](https://github.com/AmpleOrganics/Blaze.vue/commit/4cd3c310cfd7c9e536c19440659112b47af504a6)

## Fixes

Update dependancies june 5th 2019 [3031dad](https://github.com/AmpleOrganics/Blaze.vue/commit/3031dad25beaf1ffe92a3ce4a91f5c1267009866)

Docs: Select & TextArea: Name prop inclusion. Name prop was being used but was not defined in props for components [973b997](https://github.com/AmpleOrganics/Blaze.vue/commit/973b997434fbfceb3f7bffa50cb4b2c658179362)

# 3.1.0 (2019-05-06)

## New

InfoPair: add support for html label [f89faa1](https://github.com/AmpleOrganics/Blaze.vue/pull/327/commits/f89faa1351ebcfedb47f365bf965292e942742f4)

Button: align material icons vertically with text [6d19334](https://github.com/AmpleOrganics/Blaze.vue/pull/321/commits/6d193347bfd1bdf96db5b140b0440226c632a120)

## Fixes

Docs: adjust code snippet spacing formatting [9957169](https://github.com/AmpleOrganics/Blaze.vue/pull/323/commits/9957169e1f9caeef9f1da82cbf37fde37fd9c247)

# 3.0.1 (2019-04-09)

## Fixes

Alert: Add a named slot for icons called `icon` for when you want to pass in an icon via `i` tags [3f82377](https://github.com/AmpleOrganics/Blaze.vue/commit/3f8237795dd9edbee0ee1fba76f8681a12c2e573)

# 3.0.0 (2019-03-27)

## Breaking changes

Remove glyphicons in favor of material icons [21518f6](https://github.com/AmpleOrganics/Blaze.vue/commit/21518f6a2602b3b3a73eda09c68a70c4595d6501)

## New

Alert: add a close button to ao-alert to allow early dismissal [6555e6e](https://github.com/AmpleOrganics/Blaze.vue/commit/6555e6ee916e1ad825c5312dad94058b866310a8)

DatePicker: new Date Picker component checkout the docs for a Demo and usage instructions [1be3d65](https://github.com/AmpleOrganics/Blaze.vue/commit/1be3d65493de6a289e204ba3012c6b2e30fcf61c)

Dropdown Item: new Dropdown Item functional component checkout the docs for a Demo and usage instructions [cd662f2](https://github.com/AmpleOrganics/Blaze.vue/commit/cd662f286ef14625071dc37c7d765e47b1e43bbc)

## Fixes

Button: fix hover styles when using `link` class [d152a37](https://github.com/AmpleOrganics/Blaze.vue/commit/d152a37f0322e4a8767ef2cac7b48976e2804c0f)

Radio: style/naming css fixes [83bd2a7](https://github.com/AmpleOrganics/Blaze.vue/commit/83bd2a786eb1836ef5e914fb9e67d1efb6069dd8) [506fb61](https://github.com/AmpleOrganics/Blaze.vue/commit/506fb6109fa5c06ac7ae7fba30bdb113f28f2abd)

Alert: set max width [306fe54](https://github.com/AmpleOrganics/Blaze.vue/commit/306fe54f5af06e8df28951fa320f75dc9b0d090c)

# 2.1.0 (2019-02-19)

## New

SectionHeader: added a slot adjacent to the header text [01342bc](https://github.com/AmpleOrganics/Blaze.vue/pull/297/commits/01342bcca14426e56a132b96c29a105ae4c6b97f)

# 2.0.1 (2019-02-13)

## New

Docs: Table Documentation now supports alignRight and hidden prop toggles [2623432](https://github.com/AmpleOrganics/Blaze.vue/pull/292/commits/2623432d4d78a107351121d22400b7c25071d098)

## Fix

Changelog: formatting and correct year

# 2.0.0 (2019-02-03)

## Breaking changes

Pagination: New pagination component has been implemented [53a4ec4](https://github.com/AmpleOrganics/Blaze.vue/pull/287/commits/53a4ec49efd274fc6d753b3a79928b98e6aae9f9)

Table: must click actual span inside th to trigger sort [ed91910](https://github.com/AmpleOrganics/Blaze.vue/pull/287/commits/ed9191063f31d32927f9b962253aaff81bd8963c)

## New

Table Cell: new optional component, can be used to style elements such as buttons and inputs to fit a more table aesthetic, it's essentially a td with props and styles [8c341c5](https://github.com/AmpleOrganics/Blaze.vue/pull/287/commits/8c341c576eea4fc799149777e42a75e0633f29eb)

Table: headers can now be right aligned and/or hidden (uses v-show under the hood), using header keys. Check documentation for examples [ed91910](https://github.com/AmpleOrganics/Blaze.vue/pull/287/commits/ed9191063f31d32927f9b962253aaff81bd8963c)

# 1.5.0 (2018-12-07)

## Fixes

Input, Select, TextArea, FileUpload, Checkbox, Radio, Radio Button Group: Emits focus and Blur [1630ac4](https://github.com/AmpleOrganics/Blaze.vue/commit/1630ac41a8df176df04a291d2e73820eab0855ca)

Input, TextArea: Emits change[1630ac4](https://github.com/AmpleOrganics/Blaze.vue/commit/1630ac41a8df176df04a291d2e73820eab0855ca)

Select accepts a boolean as a value [1fc65bc](https://github.com/AmpleOrganics/Blaze.vue/commit/1fc65bcba918bdfe0d0ae38f10f829cf51c9cb22)

Pagination styles improved [ae5a47a](https://github.com/AmpleOrganics/Blaze.vue/commit/ae5a47a7b7a3d41da2191f87c32ec223e8797dfa)

Improve gray color scale [7d05f98](https://github.com/AmpleOrganics/Blaze.vue/commit/7d05f982af83954c9635a483d3ba99cba1eef1bc)

# 1.4.0 (2018-11-26)

## Breaking Changes

Button: prop `formName` removed in favour of using html attribute `form` that is inherently passed in. [806674b](https://github.com/AmpleOrganics/Blaze.vue/pull/262/commits/806674bb296b0b6ffa9f4bbd26f809d4e6e6746e)

## Fixes

AoSelect, AoRadioGroup: fixed preselect and dynamically changing select and radio group based on props. bug was introduced in version 1.3.0 [496976d
](https://github.com/AmpleOrganics/Blaze.vue/pull/262/commits/496976d545f1dec89c2c0eb516ebc93f2e6a1add)

## New features

Callout: Add dismissible feature and overall style improvements [PR](https://github.com/AmpleOrganics/Blaze.vue/pull/257) fixes [242](https://github.com/AmpleOrganics/Blaze.vue/issues/242) and [243](https://github.com/AmpleOrganics/Blaze.vue/issues/243)

# 1.3.0 (2018-11-15)

## New Component

Radio Button Group: Created a new component for displaying a group of radio buttons. Accepts options and name as props [2094c6e](https://github.com/AmpleOrganics/Blaze.vue/commit/2094c6ea454a8772f586c21c5bc545df2714d2b2)

## New

Card: Added footer slot [1958e07](https://github.com/AmpleOrganics/Blaze.vue/commit/1958e073dd5fcd1e608e38aeba6ee94f94e87337)

Input, Select, TextArea, FileUpload: Emits blur [719bc3f](https://github.com/AmpleOrganics/Blaze.vue/commit/719bc3fefb5616b90b27999a09fe81f30296e2b7)

Input: Accepts min prop [65af10d](https://github.com/AmpleOrganics/Blaze.vue/commit/65af10dc4303046901238cdcf8471ca6260325cc)

Input, Select, TextArea, FileUpload: Accepts invalid message prop, disableAll prop that disables input and adds opacity to label and instruction text [65af10d](https://github.com/AmpleOrganics/Blaze.vue/commit/65af10dc4303046901238cdcf8471ca6260325cc)

## Fixes

Select: A watcher was set on value so if the prop updates it will be reflected [4ea2100](https://github.com/AmpleOrganics/Blaze.vue/commit/4ea210032070fd7b22cc9801b94b9856c1a06b77)

# 1.2.2 (2018-11-05)

## Fixes

HeaderToolbar: Added a callback prop 'titleClicked' that gets invoked when header title or image are clicked [5378c6b](https://github.com/AmpleOrganics/Blaze.vue/pull/233/commits/5378c6b56dd14430cf7033770e025ef63edd58ee)

HeaderToolbar: Disable link underlining in the header toolbar [8cac232](https://github.com/AmpleOrganics/Blaze.vue/pull/226/commits/8cac23289d08adde109ac281b0c1ca0f9ca2a706)

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

Breadcrumbs: A breadcrumb component to easily navigate your page! FIXES:[#104](https://github.com/AmpleOrganics/Blaze.vue/issues/104), [PR #154](https://github.com/AmpleOrganics/Blaze.vue/pull/154)

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

- select: Placeholder prop is now used so easily create a placeholder (eg. 'Select One') with a value of `null`
- select: default can now be set by setting your v-model related data attribute
- table: can now set default sort by and order using props `sortBy` and `order` (order only takes 'asc' or 'desc')
- fileUpload: added name prop for usage of html's `name` property

### Breaking Changes

- change all instances of `has-error` and `hasError` to `invalid` to better represent the prop and css class
- internal changes for component layout in components (less unnecessary elements) can break e2e tests/custom css
- renamed many classes to follow [BEM](http://getbem.com/naming/) more closely
- select: options are now passed in as the default slot instead of a prop
- select: default prop removed in favour of setting your data tied to the default value of the select box
- input: remove many html based validations (min, max, required, etc) in favour of using a validation library or custom solution
