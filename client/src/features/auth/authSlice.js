import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser, logoutUser, getMe } from "./authThunks";

const initialState = {
  user: null,
  isAuthenticated: false,
  isInitialized: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMe.pending, (state) => {})

      .addCase(getMe.fulfilled, (state, action) => {
        state.isInitialized = true;
        state.isAuthenticated = true;
        state.user = action.payload;
      })

      .addCase(getMe.rejected, (state) => {
        state.isInitialized = true;
        state.isAuthenticated = false;
        state.user = null;
      })

      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload || "Login failed";
      });

    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Registration failed";
      });

    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = null;
    });
  },
});

export default authSlice.reducer;
