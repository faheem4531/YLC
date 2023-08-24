import Axios from "axios";

const api = Axios.create({
  // baseURL: 'https://api.yourlondonchauffeur.co.uk/',
  baseURL: "https://london-chauffeur-71ef7e0485bb.herokuapp.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization:
      "Bearer " +
      (typeof window !== "undefined" && localStorage.getItem("token")),
  },
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const errorCode = error?.response?.status;
    if (errorCode === 401 && error.response.config.url !== "users/login") {
      localStorage.clear();
      window.location.href = "/sign-in";
    }
    return Promise.reject(error);
  }
);

export default api;
