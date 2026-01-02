import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsersApi } from "./userAPi";
import axios from "axios";

export const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllUsersApi();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
