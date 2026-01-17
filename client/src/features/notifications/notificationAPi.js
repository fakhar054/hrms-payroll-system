import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getAllnotificationsApi = async (req, res) => {
  const response = await axios.get(
    `${BASE_URL}/annoucement/api/my-notifications`
  );
  return response.data;
};
