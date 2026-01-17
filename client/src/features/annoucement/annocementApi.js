import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const createAnnoucmentApi = async (data) => {
  console.log("Sending to backend:", data);

  return axios.post(`${BASE_URL}/annoucement/api/create-annoucement`, data, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getAnnoucementApi = async () => {
  const url = `${BASE_URL}/annoucement/api/get-all-annoucment`;
  const response = await axios.get(url);
  return response.data;
};
