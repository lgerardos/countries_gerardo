<template>
  <div class="character-card p-2">
    <img :src="characterImg" :alt="character.name" />
    <p><b>Nombre: </b>{{ character.name }}</p>
    <p><b>Descripción: </b>{{ characterDescription }}</p>
  </div>
</template>

<script>
export default {
  props: ["character"],
  computed: {
    characterImg() {
      return `${this.character.thumbnail.path}/standard_medium.${this.character.thumbnail.extension}`;
    },
    characterDescription() {
      return this.character.description === ""
        ? "No disponible"
        : this.character.description;
    },
  },
};
</script>

<style lang="css" scoped>
.character-card {
  border: 1px solid #ccc;
  border-radius: 9px;
  font-size: 0.8em;
}
p {
  margin-bottom: 0px;
}
</style>
