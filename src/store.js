import Vue from "vue";
import Vuex from "vuex";
import service from "./services/countries.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // poner variables y colecciones aquí
    loading: false,
    country: {},
    countries: [],
    regions: [
      {
        value: "africa",
        text: "África",
      },
      {
        value: "americas",
        text: "América",
      },
      {
        value: "asia",
        text: "Asia",
      },
      {
        value: "europe",
        text: "Europa",
      },
      {
        value: "oceania",
        text: "Oceanía",
      },
    ],
  },
  mutations: {
    // funciones síncronas para cambiar el estado e.j. put, edit, delete
    SET_COUNTRIES(state, countries) {
      state.countries = countries;
    },
    SET_COUNTRY(state, country) {
      state.country = country;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
  },
  getters: {
    // pon el equivalente a las propiedades computadas aquí
    filtersCountries: (state) => (filter) => {
      return state.countries.filter((country) =>
        country.name.toLowerCase().includes(filter.toLowerCase())
      );
    },
  },
  actions: {
    // funciones asíncronas que puede llamar una o más mutaciones
    getCountries: async ({ commit }, url) => {
      commit("SET_LOADING", true);
      let response = await service.get(url);
      commit("SET_COUNTRIES", response.data);
      commit("SET_LOADING", false);
    },
    getCountry: async ({ commit }, url) => {
      commit("SET_LOADING", true);
      let response = await service.get(url);
      commit("SET_COUNTRY", response.data);
      commit("SET_LOADING", false);
    },
  },
});
