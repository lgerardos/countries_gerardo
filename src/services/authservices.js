import iDocsAPI from "./baseurl"

export default {
  auth(data) {
    return iDocsAPI.post("/users/authenticate", data);
  },
};
