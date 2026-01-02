import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getAllUsersApi = async () => {
  return axios.get(`${BASE_URL}/api/all-users`, {}, { withCredentials: true });
};
