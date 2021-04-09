import api from "./marvel";

export default {
  getCharacteres(offset = "0") {
    return api.get(`/characters?offset=${offset}`);
  },
  getComics() {
    return api.get("/comics");
  },
};
