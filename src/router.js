import Vue from 'vue'
import Home from './views/Home.vue'
import Demo from './views/Demo.vue'
import Router from 'vue-router'
import Alert from '../docs/components/Alert.vue'
import Badge from '../docs/components/Badge.vue'
import Breadcrumbs from '../docs/components/Breadcrumbs.vue'
import Button from '../docs/components/Button.vue'
import Card from '../docs/components/Card.vue'
import Checkbox from '../docs/components/Checkbox.vue'
import Callout from '../docs/components/Callout.vue'
import Dropdown from '../docs/components/Dropdown.vue'
import DropdownItem from '../docs/components/DropdownItem.vue'
import FileUpload from '../docs/components/FileUpload.vue'
import HeaderToolbar from '../docs/components/HeaderToolbar.vue'
import InfoPair from '../docs/components/InfoPair.vue'
import Input from '../docs/components/Input.vue'
import DatePicker from '../docs/components/DatePicker.vue'
import Navbar from '../docs/components/Navbar.vue'
import Modal from '../docs/components/Modal.vue'
import Paginate from '../docs/components/Paginate.vue'
import Radio from '../docs/components/Radio.vue'
import RadioButtonGroup from '../docs/components/RadioButtonGroup.vue'
import SectionHeader from '../docs/components/SectionHeader.vue'
import Select from '../docs/components/Select.vue'
import MultiSelect from '../docs/components/MultiSelect.vue'
import Spinner from '../docs/components/Spinner.vue'
import Table from '../docs/components/Table.vue'
import TableCell from '../docs/components/TableCell.vue'
import TextArea from '../docs/components/TextArea.vue'
import TextStyle from '../docs/components/TextStyle.vue'
import Tooltip from '../docs/components/Tooltip.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    },
    { name: 'alert', path: '/alert', component: Alert, meta: { title: 'Alert' } },
    { name: 'badge', path: '/badge', component: Badge, meta: { title: 'Badge' } },
    { name: 'breadcrumbs', path: '/breadcrumbs', component: Breadcrumbs, meta: { title: 'Breadcrumbs' } },
    { name: 'button', path: '/button', component: Button, meta: { title: 'Button' } },
    { name: 'callout', path: '/callout', component: Callout, meta: { title: 'Callout' } },
    { name: 'card', path: '/card', component: Card, meta: { title: 'Card' } },
    { name: 'checkbox', path: '/checkbox', component: Checkbox, meta: { title: 'Checkbox' } },
    { name: 'datepicker', path: '/datepicker', component: DatePicker, meta: { title: 'Date Picker' } },
    { name: 'dropdown', path: '/dropdown', component: Dropdown, meta: { title: 'Dropdown' } },
    { name: 'DropdownItem', path: '/DropdownItem', component: DropdownItem, meta: { title: 'Dropdown Item' } },
    { name: 'fileupload', path: '/fileupload', component: FileUpload, meta: { title: 'File Upload' } },
    { name: 'headertoolbar', path: '/headertoolbar', component: HeaderToolbar, meta: { title: 'Header Toolbar' } },
    { name: 'infopair', path: '/infopair', component: InfoPair, meta: { title: 'Info Pair' } },
    { name: 'input', path: '/input', component: Input, meta: { title: 'Input' } },
    { name: 'modal', path: '/modal', component: Modal, meta: { title: 'Modal' } },
    { name: 'multiselect', path: '/multiselect', component: MultiSelect, meta: { title: 'Multi Select' } },
    { name: 'navbar', path: '/navbar', component: Navbar, meta: { title: 'Navbar' } },
    { name: 'paginate', path: '/paginate', component: Paginate, meta: { title: 'Paginate' } },
    { name: 'radio', path: '/radio', component: Radio, meta: { title: 'Radio' } },
    { name: 'radio button group', path: '/radio-button-group', component: RadioButtonGroup, meta: { title: 'Radio Button Group' } },
    { name: 'sectionheader', path: '/sectionheader', component: SectionHeader, meta: { title: 'Section Header' } },
    { name: 'select', path: '/select', component: Select, meta: { title: 'Select' } },
    { name: 'spinner', path: '/spinner', component: Spinner, meta: { title: 'Spinner' } },
    { name: 'table', path: '/table', component: Table, meta: { title: 'Table' } },
    { name: 'tablecell', path: '/tablecell', component: TableCell, meta: { title: 'Table Cell' } },
    { name: 'textarea', path: '/textarea', component: TextArea, meta: { title: 'Text Area' } },
    { name: 'textstyle', path: '/textstyle', component: TextStyle, meta: { title: 'Text Style' } },
    { name: 'tooltip', path: '/tooltip', component: Tooltip, meta: { title: 'Tooltip' } }
  ]
})
