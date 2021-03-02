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
  el: "#app",
  store,
  render: h => h(App),
  mounted() {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event("render-event"));
  }
});
