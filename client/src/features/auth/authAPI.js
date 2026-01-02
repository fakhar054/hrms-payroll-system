import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const loginApi = (data) =>
  axios.post(`${BASE_URL}/api/login`, data, {
    withCredentials: true,
  });

export const registerApi = (data) =>
  axios.post(`${BASE_URL}/register`, data, {
    withCredentials: true,
  });

export const logoutApi = () =>
  axios.get(`${BASE_URL}/api/logout`, {}, { withCredentials: true });
