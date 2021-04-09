<template>
  <div class="container">
    <h1>Universo Marvel</h1>
    <div class="row">
      <div class="col col-3">
        <button
          class="btn btn-primary m-1"
          :disabled="!isThereLeftPage"
          @click="previousPage"
        >
          Anterior
        </button>
      </div>
      <div class="col col-3 offset-6">
        <button
          class="btn btn-primary m-1"
          :disabled="!isThereRightPage"
          @click="nextPage"
        >
          Siguiente
        </button>
      </div>
    </div>
    <div class="row">
      <character-card
        v-for="character in characters"
        :key="character.id"
        :character="character"
        class="col col-3"
      ></character-card>
    </div>
  </div>
</template>

<script>
import api from "../services/marvel_service";
import CharacterCard from "../components/CharacterCard";
export default {
  data() {
    return {
      data: [],
      characters: [],
    };
  },
  async mounted() {
    await this.getCharacteres(0);
  },
  computed: {
    isThereLeftPage() {
      return this.data.offset > 0;
    },
    isThereRightPage() {
      return this.data.offset + this.data.limit < this.data.total;
    },
    previousOffset() {
      return this.data.offset - this.data.limit;
    },
    nextOffset() {
      return this.data.offset + this.data.limit;
    },
  },
  methods: {
    async previousPage() {
      if (this.isThereLeftPage) {
        await this.getCharacteres(this.previousOffset);
      }
    },
    async nextPage() {
      if (this.isThereRightPage) {
        await this.getCharacteres(this.nextOffset);
      }
    },
    async getCharacteres(offset) {
      let response = await api.getCharacteres(offset);
      this.data = response.data.data;
      this.characters = this.data.results;
    },
  },
  components: {
    CharacterCard,
  },
};
</script>

<style lang="css" scoped></style>
