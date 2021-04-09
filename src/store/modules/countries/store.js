import state from "./state"
import mutations from "./mutations"
import getters from "./getters"
import actions from "./actions"

const store = {
  namespaced: true,
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions,
};

export default store;
