export const SmartSupp = {
  state: {
    smartSuppOnline: false
  },
  getters: {
    smartSuppOnline: state => {
      return state.smartSuppOnline && !global.__PRERENDER_INJECTED;
    }
  },
  mutations: {
    smartSuppOnline(state, { online }) {
      state.smartSuppOnline = online;
    }
  },
  actions: {
    smartSuppOnline({ commit }) {
      commit("smartSuppOnline", { online: true });
    },
    smartSuppOffline({ commit }) {
      commit("smartSuppOnline", { online: false });
    }
  }
};
export default SmartSupp;
