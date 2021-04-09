import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.eu/rest/v2/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  get(url) {
    return api.get(url);
  },
};