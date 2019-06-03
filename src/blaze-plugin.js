import '@/assets/styles/style.scss'
import AoAlert from './components/AoAlert.vue'
import AoBadge from './components/AoBadge.vue'
import AoBreadcrumbs from './components/AoBreadcrumbs.vue'
import AoButton from './components/AoButton.vue'
import AoCallout from './components/AoCallout.vue'
import AoCard from './components/AoCard.vue'
import AoCheckbox from './components/AoCheckbox.vue'
import AoDropdown from './components/AoDropdown.vue'
import AoDropdownItem from './components/AoDropdownItem.vue'
import AoFileUpload from './components/AoFileUpload.vue'
import AoHeaderToolbar from './components/AoHeaderToolbar.vue'
import AoInfoPair from './components/AoInfoPair.vue'
import AoInput from './components/AoInput.vue'
import AoDatePicker from './components/AoDatePicker/AoDatePicker.vue'
import AoModal from './components/AoModal.vue'
import AoMultiSelect from './components/AoMultiSelect.vue'
import AoNavbar from './components/AoNavbar.vue'
import AoPaginate from './components/AoPaginate.vue'
import AoRadio from './components/AoRadio.vue'
import AoRadioButtonGroup from './components/AoRadioButtonGroup'
import AoSectionHeader from './components/AoSectionHeader.vue'
import AoSelect from './components/AoSelect.vue'
import AoSpinner from './components/AoSpinner.vue'
import AoTable from './components/AoTable.vue'
import AoTableCell from './components/AoTableCell.vue'
import AoTextArea from './components/AoTextArea.vue'
import AoTextStyle from './components/AoTextStyle.vue'
import AoTooltip from './components/AoTooltip.vue'
import ClickOutside from './directives/click-outside.js'

const Blaze = {
  install (Vue) {
    Vue.component('AoAlert', AoAlert)
    Vue.component('AoBadge', AoBadge)
    Vue.component('AoBreadcrumbs', AoBreadcrumbs)
    Vue.component('AoButton', AoButton)
    Vue.component('AoCallout', AoCallout)
    Vue.component('AoCard', AoCard)
    Vue.component('AoCheckbox', AoCheckbox)
    Vue.component('AoDropdown', AoDropdown)
    Vue.component('AoDropdownItem', AoDropdownItem)
    Vue.component('AoFileUpload', AoFileUpload)
    Vue.component('AoHeaderToolbar', AoHeaderToolbar)
    Vue.component('AoInfoPair', AoInfoPair)
    Vue.component('AoInput', AoInput)
    Vue.component('AoDatePicker', AoDatePicker)
    Vue.component('AoModal', AoModal)
    Vue.component('AoMultiSelect', AoMultiSelect)
    Vue.component('AoNavbar', AoNavbar)
    Vue.component('AoPaginate', AoPaginate)
    Vue.component('AoRadio', AoRadio)
    Vue.component('AoRadioButtonGroup', AoRadioButtonGroup)
    Vue.component('AoSectionHeader', AoSectionHeader)
    Vue.component('AoSelect', AoSelect)
    Vue.component('AoSpinner', AoSpinner)
    Vue.component('AoTable', AoTable)
    Vue.component('AoTableCell', AoTableCell)
    Vue.component('AoTextArea', AoTextArea)
    Vue.component('AoTextStyle', AoTextStyle)
    Vue.component('AoTooltip', AoTooltip)
    Vue.directive('ClickOutside', ClickOutside)
  }
}

export default Blaze
