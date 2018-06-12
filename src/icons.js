import Vue from 'vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'

fontawesome.library.add(
    require('@fortawesome/fontawesome-free-brands/faGithub'),
    require('@fortawesome/fontawesome-free-brands/faLinkedin'),
    require('@fortawesome/fontawesome-free-brands/faStackOverflow'),
    require('@fortawesome/fontawesome-free-regular/faEnvelope'),
    require('@fortawesome/fontawesome-free-regular/faFilePdf'),
    require('@fortawesome/fontawesome-free-regular/faFileWord'),
    require('@fortawesome/fontawesome-free-solid/faArrowDown'),
    require('@fortawesome/fontawesome-free-solid/faBars'),
    require('@fortawesome/fontawesome-free-solid/faBolt'),
    require('@fortawesome/fontawesome-free-solid/faBuilding'),
    require('@fortawesome/fontawesome-free-solid/faCogs'),
    require('@fortawesome/fontawesome-free-solid/faComment'),
    require('@fortawesome/fontawesome-free-solid/faDownload'),
    require('@fortawesome/fontawesome-free-solid/faGraduationCap'),
    require('@fortawesome/fontawesome-free-solid/faExclamationCircle'),
    require('@fortawesome/fontawesome-free-solid/faMobileAlt'),
    require('@fortawesome/fontawesome-free-solid/faUsers'),
)

Vue.component("font-awesome-icon", FontAwesomeIcon)