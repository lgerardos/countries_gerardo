import Vue from "vue";
import Vuex from "vuex";
import countries from "./modules/countries/store";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    countries: countries,
  },
});

export default store;
