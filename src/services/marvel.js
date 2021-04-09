import axios from "axios";

const marvelAPI = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

marvelAPI.defaults.params = {
  ts: 1,
  apikey: "78b0bf9e78b2c481485ca6f81d65c796",
  hash: "0c46dd1726f7327e4a67fdf9e2d39a82",
};

marvelAPI.interceptors.request.use(
  async (config) => {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default marvelAPI;
