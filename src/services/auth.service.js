import axios from "axios";
import { url } from "../api";

export const login = (email, password) => {
  return axios
    .post(`${url}/login`, {
      email: email,
      password: password,
    })
    .then((res) => {
      if (res.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }

      return res.data;
    });
};
export const logout = () => {
  localStorage.removeItem("user");
};
export const register = (name, email, password) => {
  return axios
    .post(`${url}/login`, {
      name: name,
      email: email,
      password: password,
    })
    .then((res) => {
      return res.data;
    });
};
