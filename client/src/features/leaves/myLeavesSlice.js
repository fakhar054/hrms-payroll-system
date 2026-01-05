import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/**
 * GET: My Leaves
 */
export const fetchMyLeaves = createAsyncThunk(
  "leave/fetchMyLeaves",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/leave/my-leaves",
        { withCredentials: true }
      );
      return res.data.leaves; // 👈 important
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch leaves"
      );
    }
  }
);

const myLeavesSlice = createSlice({
  name: "myLeaves",
  initialState: {
    loading: false,
    leaves: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyLeaves.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMyLeaves.fulfilled, (state, action) => {
        state.loading = false;
        state.leaves = action.payload;
      })
      .addCase(fetchMyLeaves.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default myLeavesSlice.reducer;
