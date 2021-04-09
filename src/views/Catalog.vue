<template>
  <div class="container">
    <pre>{{ response }}</pre>
  </div>
</template>

<script>
import tbcService from "../services/tbcservices";
export default {
  data() {
    return {
      response: [],
    };
  },
  async mounted() {
    // let response = await authService.auth({
    //   username: "lsantos",
    //   password: "lsantos6",
    //   bbuid: "9B1D0F6F-A58D-4659-AEA4-6BC1B2E4C712"
    // });
    // this.response = response.data;
    // if (this.response.resultcode === 0) {
    //   localStorage.setItem("Token", this.response.token);
    // }
    let response = await tbcService.catalog();
    this.response = response.data;
  },
};
</script>

<style lang="scss" scoped></style>
