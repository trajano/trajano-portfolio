import Vue from "vue";
import store from "../store";
Vue.directive("scroll-spy", {
  inserted(el) {
    //if (!global.__PRERENDER_INJECTED) {
    store.dispatch("ScrollSpy/addScrollSpy", { el });
    //}
  },
});
