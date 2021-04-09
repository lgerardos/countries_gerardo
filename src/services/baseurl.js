import axios from "axios";

const iDocsAPI = axios.create({
  baseURL: "http://tbcgitsd:8080",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default iDocsAPI;
