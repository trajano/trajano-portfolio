import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";

import App from "@/components/App";
import "@/icons";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("App.vue", () => {
  it("should not crash when prerendering", () => {
    global.__PRERENDER_INJECTED = {};

    const wrapper = shallowMount(App, {
      mocks: {
        $store: {
          state: {}
        }
      },
      localVue
    });
    wrapper.html();
  });
  afterEach(() => {
    delete global.__PRERENDER_INJECTED;
  });
});
