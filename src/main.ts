import Vue from "vue";
import "./font-faces.scss";
import "./app.scss";
import "materialize-css";
import "./icons";
import "./directives";
import App from "@/components/App.vue";
import store from "./store";

/* eslint-disable no-new */
new Vue({
  store,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered"))
}).$mount("#app");
