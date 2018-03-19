import AoAlert from './components/AoAlert.vue'
import AoButton from './components/AoButton.vue'
import AoCard from './components/AoCard.vue'
import AoCheckbox from './components/AoCheckbox.vue'
import AoForm from './components/AoForm.vue'
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

const Blaze = {
  install (Vue, options) {
    Vue.component(AoAlert.name, AoAlert)
    Vue.component(AoButton.name, AoButton)
    Vue.component(AoCard.name, AoCard)
    Vue.component(AoCheckbox.name, AoCheckbox)
    Vue.component(AoForm.name, AoForm)
    Vue.component(AoInput.name, AoInput)
    Vue.component(AoModal.name, AoModal)
    Vue.component(AoNavbar.name, AoNavbar)
    Vue.component(AoPaginate.name, AoPaginate)
    Vue.component(AoRadio.name, AoRadio)
    Vue.component(AoSectionHeader.name, AoSectionHeader)
    Vue.component(AoSelect.name, AoSelect)
    Vue.component(AoSpinner.name, AoSpinner)
    Vue.component(AoTable.name, AoTable)
    Vue.component(AoTextArea.name, AoTextArea)
  }
}

export default Blaze
