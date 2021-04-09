import service from "../../../services/countries";

export default {
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
};
