<template>
  <div class="country-card p-2" @click="showDetail">
    <img :src="country.flag" :alt="country.name" width="100" height="60" />
    <p>
      <b>{{ country.name }}</b>
    </p>
    <p><b>Population: </b>{{ country.population }}</p>
    <p><b>Region: </b>{{ country.region }}</p>
    <p><b>Capital: </b>{{ country.capital }}</p>
  </div>
</template>

<script>
export default {
  props: ["country"],
  methods: {
    showDetail() {
      this.$router.push({ name: 'CountryDetail', params: { id: this.country.alpha3Code } });
    },
  },
};
</script>

<style lang="css" scoped>
.country-card {
  border: 1px solid #ccc;
  border-radius: 9px;
  font-size: 0.8em;
}
p {
  margin-bottom: 0px;
}
</style>
