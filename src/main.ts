import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCat,
  faCode,
  faComments,
  faEnvelope,
  faCloudMoon,
  faDice,
  faClock,
  faRocket,
  faDiamond,
  faGamepad,
  faServer,
  faCloud,
  faKiwiBird,
  faCodeCommit,
  faHouse
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faSignalMessenger } from '@fortawesome/free-brands-svg-icons'

library.add(
  faCat,
  faGithub,
  faCode,
  faComments,
  faSignalMessenger,
  faEnvelope,
  faCloudMoon,
  faDice,
  faClock,
  faRocket,
  faDiamond,
  faGamepad,
  faServer,
  faCloud,
  faKiwiBird,
  faCodeCommit,
  faHouse
)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
