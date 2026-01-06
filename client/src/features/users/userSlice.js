import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "./userThunk";
import { getAllUsers } from "./userThunk";


const initialState = {
  users: [],
  selectedUser: null,
  formMode: "create" | "review" | "edit",
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearSelectedUser: (state) => {
      state.selectedUser = null;
    },
    clearUserError: (state) => {
      state.error = null;
    },
    setSelectedUser: (state, action) => {
    state.selectedUser = action.payload;
   },

  setFormMode: (state, action) => {
    state.formMode = action.payload;
  },

  clearSelectedUser: (state) => {
    state.selectedUser = null;
    state.formMode = "create";
  },

  clearUserError: (state) => {
    state.error = null;
  },
  },
  extraReducers: (builder) => {
    builder

      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.data;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
      
  },
});

export const { clearSelectedUser, clearUserError, setFormMode, setSelectedUser } = userSlice.actions;
export default userSlice.reducer;
