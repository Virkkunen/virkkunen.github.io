import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCat,
  faClock,
  faCloudMoon,
  faCode,
  faCodeCommit,
  faComments,
  faDiamond,
  faDice,
  faEnvelope,
  faGamepad,
  faKiwiBird,
  faRocket,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faSignalMessenger,
} from "@fortawesome/free-brands-svg-icons";

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
  faKiwiBird,
  faCodeCommit,
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
