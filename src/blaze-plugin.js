import '@/assets/styles/style.scss'
import AoAlert from './components/AoAlert.vue'
import AoBadge from './components/AoBadge.vue'
import AoButton from './components/AoButton.vue'
import AoCard from './components/AoCard.vue'
import AoCheckbox from './components/AoCheckbox.vue'
import AoInfoPair from './components/AoInfoPair.vue'
import AoInput from './components/AoInput.vue'
import AoModal from './components/AoModal.vue'
import AoNavbar from './components/AoNavbar.vue'
import AoPaginate from './components/AoPaginate.vue'
import AoRadio from './components/AoRadio.vue'
import AoSectionHeader from './components/AoSectionHeader.vue'
import AoSelect from './components/AoSelect.vue'
import AoSpinner from './components/AoSpinner.vue'
import AoTable from './components/AoTable.vue'
import AoTextArea from './components/AoTextArea.vue'
import AoTextStyle from './components/AoTextStyle.vue'
import AoFileUpload from './components/AoFileUpload.vue'

const Blaze = {
  install (Vue) {
    Vue.component('AoAlert', AoAlert)
    Vue.component('AoBadge', AoBadge)
    Vue.component('AoButton', AoButton)
    Vue.component('AoCard', AoCard)
    Vue.component('AoCheckbox', AoCheckbox)
    Vue.component('AoInfoPair', AoInfoPair)
    Vue.component('AoInput', AoInput)
    Vue.component('AoModal', AoModal)
    Vue.component('AoNavbar', AoNavbar)
    Vue.component('AoPaginate', AoPaginate)
    Vue.component('AoRadio', AoRadio)
    Vue.component('AoSectionHeader', AoSectionHeader)
    Vue.component('AoSelect', AoSelect)
    Vue.component('AoSpinner', AoSpinner)
    Vue.component('AoTable', AoTable)
    Vue.component('AoTextArea', AoTextArea)
    Vue.component('AoTextStyle', AoTextStyle)
    Vue.component('AoFileUpload', AoFileUpload)
  }
}

export default Blaze
