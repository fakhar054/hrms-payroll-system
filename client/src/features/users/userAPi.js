import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getAllUsersApi = async (search = "") => {
  const url = search
    ? `${BASE_URL}/api/all-users?search=${search}`
    : `${BASE_URL}/api/all-users`;

  return axios.get(url, {
    withCredentials: true,
  });
};

export const getUserbyIdApi = async (userId) => {
  try {
    const url = `${BASE_URL}/api/get-userby-id/${userId}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const updateUserByAdmin = async (userId, formData) => {
  const url = `${BASE_URL}/api/admin/update-users/${userId}`;
  try {
    const response = await axios.patch(url, { formData });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const deletUserApi = async (userId) => {
  const url = `${BASE_URL}/api/admin/user/${userId}/deactivate`;
  try {
    const respone = await axios.patch(url, { isActive: false });
    return respone.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
