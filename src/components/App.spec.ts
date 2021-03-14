import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";

import App from "@/components/App.vue";
import "@/icons";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("App.vue", () => {
  it("should not crash when prerendering", () => {
    (window as any).__PRERENDER_INJECTED = {};

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
    delete (window as any).__PRERENDER_INJECTED;
  });
});
