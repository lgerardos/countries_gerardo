export default {
  filtersCountries: (state) => (filter) => {
    return state.countries.filter((country) =>
      country.name.toLowerCase().includes(filter.toLowerCase())
    );
  },
};
