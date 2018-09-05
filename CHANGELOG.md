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
