import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const applyLeave = createAsyncThunk(
  "leave/applyLeave",
  async (leaveData, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/api/leave/leaveapply`,
        leaveData,
        { withCredentials: true }
      );

      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Leave apply failed" }
      );
    }
  }
);

export const updateLeaveStatus = createAsyncThunk(
  "leave/updateLeaveStatus",
  async ({ id, status }) => {
    const res = await axios.patch(`${BASE_URL}/api/leave/admin/leave/${id}`, {
      status,
    });
    return res.data.leave;
  }
);

export const getAllLeaves = createAsyncThunk("leave/getAllLeaves", async () => {
  const res = await axios.get(`${BASE_URL}/api/leave/admin/all-leaves`, {
    withCredentials: true,
  });
  return res.data;
});

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
      })

      //////

      // .addCase(updateLeaveStatus.pending, (state) => {
      //   state.error = null;
      // })
      // .addCase(updateLeaveStatus.fulfilled, (state, action) => {
      //   const updatedLeave = action.payload;
      //   const index = state.leaves.findIndex((l) => l._id === updatedLeave._id);
      //   if (index !== -1) {
      //     state.leaves[index] = updatedLeave;
      //   }
      // })
      // .addCase(updateLeaveStatus.rejected, (state, action) => {
      //   state.error = action.error.message;
      // });
      .addCase(updateLeaveStatus.pending, (state) => {
        state.loading = true;
        state.error = null; // clear previous error
      })

      .addCase(updateLeaveStatus.fulfilled, (state, action) => {
        state.loading = false;
        const updatedLeave = action.payload; // now this is the leave object

        const index = state.leaves.findIndex(
          (leave) => leave._id === updatedLeave._id
        );
        if (index !== -1) {
          state.leaves[index] = {
            ...state.leaves[index],
            ...updatedLeave,
          };
        }
      })

      .addCase(updateLeaveStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "Failed to update leave";
      });
  },
});

export const { resetLeaveState } = leaveSlice.actions;
export default leaveSlice.reducer;
