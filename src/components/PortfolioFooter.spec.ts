import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import PortfolioFooter from "@/components/PortfolioFooter.vue";
import "@/icons";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("PortfolioFooter.vue", () => {
  it("should not crash", () => {
    const wrapper = shallowMount(PortfolioFooter, {
      mocks: {
        $store: {
          state: {},
        },
      },
      localVue,
    });
    wrapper.html();
  });
});
