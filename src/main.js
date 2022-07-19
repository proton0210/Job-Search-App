import App from "@/App.vue";
import "@/assets/tailwind.css";
import router from "@/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from "vue";
// Because the file name is index.js

// Making Font Awesome Global for all components
library.add(faSearch);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
//import font awesome for vue
