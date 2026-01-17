import { createSlice } from "@reduxjs/toolkit";
import { createAnnouncement, getAnnouncement } from "./annoucmentThunk";

const initialState = {
  loading: false,
  error: null,
  success: false,
  announcement: null,
  announcements: [],
};

const announcementSlice = createSlice({
  name: "announcements",
  initialState,
  reducers: {
    resetAnnouncementState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
      state.announcement = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAnnouncement.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(createAnnouncement.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.announcement = action.payload;
      })
      .addCase(createAnnouncement.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      })
      ///
      .addCase(getAnnouncement.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAnnouncement.fulfilled, (state, action) => {
        state.loading = false;
        state.announcements = action.payload;
      })
      .addCase(getAnnouncement.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch announcements";
      });
  },
});

export const { resetAnnouncementState } = announcementSlice.actions;
export default announcementSlice.reducer;
