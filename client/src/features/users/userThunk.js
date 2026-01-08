import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deletUserApi,
  getAllUsersApi,
  getUserbyIdApi,
  updateUserByAdmin,
} from "./userAPi";
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

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId, { rejectWithValue }) => {
    try {
      const data = await deletUserApi(userId);
      return { userId, ...data };
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ userId, formData }, { rejectWithValue }) => {
    try {
      const data = await updateUserByAdmin(userId, formData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUserById = createAsyncThunk(
  "user/getUserbyId",
  async ({ userId }, { rejectWithValue }) => {
    try {
      const data = await getUserbyIdApi(userId);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
