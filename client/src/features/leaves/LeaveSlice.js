import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

/* ---- API CALL ---- */
export const getAllLeaves = createAsyncThunk(
  "leave/getAllLeaves",
  async () => {
    const res = await axios.get(
      `${BASE_URL}/api/leave/admin/all-leaves`,
      { withCredentials: true }
    );
    return res.data; // return backend data directly
  }
);

/* ---- SLICE ---- */
const leaveSlice = createSlice({
  name: "leave",
  initialState: {
    leaves: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllLeaves.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllLeaves.fulfilled, (state, action) => {
        state.loading = false;
        state.leaves = action.payload.leaves;
      })
      .addCase(getAllLeaves.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default leaveSlice.reducer;
