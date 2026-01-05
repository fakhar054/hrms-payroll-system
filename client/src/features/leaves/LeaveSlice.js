import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;


export const applyLeave = createAsyncThunk(
  "leave/applyLeave",
  async (leaveData, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/leave/leaveapply",
        leaveData,
        { withCredentials: true } // IMPORTANT if using cookies/JWT
      );

      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Leave apply failed" }
      );
    }
  }
);


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


export const { resetLeaveState } = leaveSlice.actions;
export default leaveSlice.reducer;
