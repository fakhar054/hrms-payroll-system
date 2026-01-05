import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi, logoutApi, registerApi } from "./authAPI";
import axios from "axios";

axios.defaults.withCredentials = true;
const BASE_URL = import.meta.env.VITE_API_URL;

// export const loginUser = createAsyncThunk(
//   "auth/loginUser",
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const response = await loginApi(credentials);
//       console.log("Login response:", response.data);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await loginApi(credentials);

      if (!response.data.success) {
        return rejectWithValue(response.data.message);
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await registerApi(userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      console.log(" Logout API called");
      const res = await logoutApi();
      console.log(" Logout API response:", res.data);
      return true;
    } catch (error) {
      console.error(" Logout API error:", error.response?.data);
      return rejectWithValue(error.response?.data);
    }
  }
);

export const getMe = createAsyncThunk(
  "auth/getMe",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/me`, {
        withCredentials: true,
      });
      console.log("User from getMe:", response.data.user);
      return response.data.user;
    } catch (error) {
      console.log("GET ME ERROR:", error.response?.data || error.message);
      return rejectWithValue(
        error.response?.data?.message || "Failed to get user"
      );
    }
  }
);
