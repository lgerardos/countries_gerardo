<template>
  <div class="text-start" v-if="loading">
    Cargando el detalle...
  </div>
  <div v-else>
    <div class="text-start">
      <div class="row mb-4">
        <div class="col">
          <button type="button" class="btn btn-outline-primary" @click="goBack">
            Regresar
          </button>
        </div>
      </div>
      <img :src="country.flag" :alt="country.name" width="200" height="120" />
      <p>
        <b>{{ country.name }}</b>
      </p>
      <p><b>Native name: </b>{{ country.nativeName }}</p>
      <p><b>Population: </b>{{ country.population }}</p>
      <p><b>Region: </b>{{ country.region }}</p>
      <p><b>Sub Region: </b>{{ country.subregion }}</p>
      <p><b>Capital: </b>{{ country.capital }}</p>
      <p>
        <b>Top Level Domain: </b
        ><span v-for="domain in country.topLevelDomain" :key="domain"
          >{{ domain }},</span
        >
      </p>
      <p>
        <b>Currencies: </b
        ><span v-for="currency in country.currencies" :key="currency.name"
          >{{ currency.name }},
        </span>
      </p>
      <p>
        <b>Languages: </b
        ><span v-for="language in country.languages" :key="language.name"
          >{{ language.name }},
        </span>
      </p>
    </div>
    <div class="row text-start mt-5">
      <h2>Border Countries:</h2>
      <div class="row">
        <router-link
          v-for="border in country.borders"
          :key="border"
          type="button"
          class="btn btn-primary col-2 m-1"
          :to="{ name: 'CountryDetail', params: { id: border } }"
          >{{ border }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
// import service from "../services/countries.js";
export default {
  props: ["id"],
  // data() {
  //   return {
  //     country: {},
  //   };
  // },
  computed: {
    ...mapState({
      country: (state) => state.country,
      loading: (state) => state.loading,
    }),
    // country() {
    //   return this.$store.state.country;
    // },
  },
  async mounted() {
    await this.getCountry(`alpha/${this.id}`);
    // this.$store.dispatch("getCountry", `alpha/${this.id}`);
    // // let response = await service.get(`alpha/${this.id}`);
    // // this.country = response.data;
  },
  async beforeRouteUpdate(to, from, next) {
    await this.getCountry(`alpha/${to.params.id}`);
    // this.$store.dispatch("getCountry", `alpha/${to.params.id}`);
    // // let response = await service.get(`alpha/${to.params.id}`);
    // // this.country = response.data;
    next();
  },
  methods: {
    goBack() {
      this.$router.push({ name: "Countries" });
    },
    ...mapActions(["getCountry"]),
  },
};
</script>

<style lang="css" scoped>
p {
  margin-bottom: 0px;
}
</style>
