import authService from "./authservices";
import iDocsAPI from "./baseurl"

iDocsAPI.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem("Token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

iDocsAPI.interceptors.response.use(
  async (response) => {
    return response;
  },
  async function(error) {
    const { config, response } = error;
    const originalRequest = config;
    if (response.status === 401 || response.status === 403) {
      let res = await authService.auth({
        username: "lsantos",
        password: "lsantos6",
        bbuid: "9B1D0F6F-A58D-4659-AEA4-6BC1B2E4C712",
      });
      if (res.data.resultcode === 0) {
        localStorage.setItem("Token", res.data.token);
        return iDocsAPI(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);

export default {
  catalog() {
    return iDocsAPI.get("/bb/categories ");
  },
};
