import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsersApi } from "./userAPi";
import axios from "axios";

export const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (search = "", { rejectWithValue }) => {
    try {
      const response = await getAllUsersApi(search);
      console.log("Response of users: ", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
