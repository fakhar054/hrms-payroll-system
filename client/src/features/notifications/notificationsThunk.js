import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllnotificationsApi } from "./notificationAPi";

export const getAllNotifications = createAsyncThunk(
  "notifications/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllnotificationsApi();
      console.log("Response from getAll notifications: ", response);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
