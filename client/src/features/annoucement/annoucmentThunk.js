import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAnnoucmentApi, getAnnoucementApi } from "./annocementApi";
import axios from "axios";

export const createAnnouncement = createAsyncThunk(
  "announcements/createAnnouncement",
  async (data, { rejectWithValue }) => {
    try {
      const response = await createAnnoucmentApi(data);
      console.log("Response from annoucemnt: ", response);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const getAnnouncement = createAsyncThunk(
  "announcements/getAnnouncement",
  async (_) => {
    try {
      const response = await getAnnoucementApi();
      // console.log("API response:", response);
      return response.announcement;
    } catch (error) {
      console.log("Thunk error:", error);

      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
