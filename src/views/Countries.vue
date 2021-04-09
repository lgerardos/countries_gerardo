<template>
  <div>
    <div class="row">
      <div class="col col-7">
        <div class="input-group mb-3">
          <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback"></span>
            <input
              type="text"
              class="form-control"
              placeholder="Busqueda"
              v-model.trim="filter"
              @keypress.enter="searchCountry"
            />
          </div>
        </div>
      </div>
      <div class="col col-5">
        <select class="form-select" v-model="regionSelected">
          <option selected disabled>Filtrar por continente</option>
          <option
            v-for="region in regions"
            :key="region.value"
            :value="region.value"
            >{{ region.text }}</option
          >
        </select>
      </div>
    </div>
    <div class="row center" v-if="loading">
      Cargando información ...
    </div>
    <div class="row" v-else>
      <country-card
        v-for="country in _filtersCountries"
        :key="country.alpha3Code"
        class="col col-3"
        :country="country"
      ></country-card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

// import service from "../services/countries.js";
import CountryCard from "../components/CountryCard";
export default {
  name: "Countries",
  components: {
    CountryCard,
  },
  data() {
    return {
      filter: "",
      regionSelected: "",
      // regions: [
      //   {
      //     value: "africa",
      //     text: "África",
      //   },
      //   {
      //     value: "americas",
      //     text: "América",
      //   },
      //   {
      //     value: "asia",
      //     text: "Asia",
      //   },
      //   {
      //     value: "europe",
      //     text: "Europa",
      //   },
      //   {
      //     value: "oceania",
      //     text: "Oceanía",
      //   },
      // ],
      // countries: [],
    };
  },
  computed: {
    ...mapState({
      loading: (state) => state.loading,
      regions: (state) => state.regions,
    }),
    ...mapGetters(["filtersCountries"]),
    // loading() {
    //   return this.$store.state.loading;
    // },
    // regions() {
    //   return this.$store.state.regions;
    // },
    _filtersCountries() {
      return this.filtersCountries(this.filter);
    },
    // filtersCountries() {
    //   return this.countries.filter((c) =>
    //     c.name.toLowerCase().includes(this.filter.toLowerCase())
    //   );
    // },
  },
  async mounted() {
    await this.getCountries("all");
    // await this.$store.dispatch("getCountries", "all");
    // //this.getCountries("all");
  },
  watch: {
    async regionSelected(newRegion) {
      await this.getCountries(`region/${newRegion}`);
      // await this.$store.dispatch("getCountries", `region/${newRegion}`);
      // // this.getCountries(`region/${newRegion}`);
    },
  },
  methods: {
    ...mapActions(["getCountries"]),
  },
  // methods: {
  //   async getCountries(url) {
  //     let response = await service.get(url);
  //     this.countries = response.data;
  //   },
  // },
};
</script>
