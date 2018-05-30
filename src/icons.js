import Vue from 'vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import solid from '@fortawesome/fontawesome-free-solid'
// import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'

fontawesome.library.add(brands, solid)

Vue.component("font-awesome-icon", FontAwesomeIcon)

