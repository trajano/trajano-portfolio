import Vue from 'vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import envelope from '@fortawesome/fontawesome-free-regular/faEnvelope'
import filePdf from '@fortawesome/fontawesome-free-regular/faFilePdf'
import fileWord from '@fortawesome/fontawesome-free-regular/faFileWord'
import solid from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(
    brands,
    solid,
    envelope,
    filePdf,
    fileWord
)

Vue.component("font-awesome-icon", FontAwesomeIcon)