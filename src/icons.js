import Vue from 'vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import envelope from '@fortawesome/fontawesome-free-regular/faEnvelope'
import solid from '@fortawesome/fontawesome-free-solid'
// import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'

fontawesome.library.add(brands, solid, envelope)

Vue.component("font-awesome-icon", FontAwesomeIcon)
