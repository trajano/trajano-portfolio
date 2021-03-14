import Vue from "vue";
import RecruiterAndResumeBlock from "@/components/RecruiterAndResumeBlock.vue";
import "@/icons";
import { expect } from "chai";

describe("RecruiterAndResumeBlock.vue", () => {
  it("should show the proper rate", () => {
    const Constructor = Vue.extend(RecruiterAndResumeBlock);
    const vm = (new Constructor({
      propsData: {}
    }).$mount() as unknown) as { rate: number };
    expect(vm.rate).eq(125);
  });
});
