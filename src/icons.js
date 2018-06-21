import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons/faStackOverflow'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons/faFilePdf'
import { faFileWord } from '@fortawesome/free-regular-svg-icons/faFileWord'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faBolt } from '@fortawesome/free-solid-svg-icons/faBolt'
import { faBuilding } from '@fortawesome/free-solid-svg-icons/faBuilding'
import { faCogs } from '@fortawesome/free-solid-svg-icons/faCogs'
import { faComment } from '@fortawesome/free-solid-svg-icons/faComment'
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons/faGraduationCap'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons/faMobileAlt'
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers'
import FontAwesomeIcon from './components/FontAwesomeIcon'

library.add(
  faGithub,
  faLinkedin,
  faStackOverflow,
  faEnvelope, faFilePdf, faFileWord,
  faArrowDown, faBars, faBolt, faBuilding, faCogs, faComment, faDownload, faGraduationCap, faExclamationCircle, faMobileAlt, faUsers
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
