import { ActionContext, Module } from "vuex";

interface SmartSuppState {
  smartSuppOnline: boolean;
}
export const SmartSupp: Module<SmartSuppState, SmartSuppState> = {
  state: {
    smartSuppOnline: false
  },
  getters: {
    smartSuppOnline: (state: SmartSuppState) => {
      // return state.smartSuppOnline && !window.__PRERENDER_INJECTED;
      return state.smartSuppOnline;
    }
  },
  mutations: {
    smartSuppOnline(state, { online }) {
      state.smartSuppOnline = online;
    }
  },
  actions: {
    smartSuppOnline({ commit }: ActionContext<SmartSuppState, SmartSuppState>) {
      commit("smartSuppOnline", { online: true });
    },
    smartSuppOffline({
      commit
    }: ActionContext<SmartSuppState, SmartSuppState>) {
      commit("smartSuppOnline", { online: false });
    }
  }
};
export default SmartSupp;
