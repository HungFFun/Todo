import axios from "axios";
import { url } from "../api";

const instance = axios.create({
  baseURL: url,
});

instance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("user"));
    if (token) {
      config.headers["x-access-token"] = token.accessToken;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err);
  }
);
export default instance;
