import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

// export const getAllUsersApi = async (search = "") => {
//   const url = search
//     ? `${BASE_URL}/api/all-users?search=${search}`
//     : `${BASE_URL}/api/all-users`;

//   return axios.get(url, {
//     withCredentials: true,
//   });
// };

export const getAllUsersApi = async (search = "") => {
  const url = search
    ? `${BASE_URL}/api/all-users?search=${search}`
    : `${BASE_URL}/api/all-users`;

  return axios.get(url, {
    withCredentials: true,
  });
};
