import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/users/userSlice";
import leaveReducer from "../features/leaves/LeaveSlice";
import myLeavesReducer from "../features/leaves/myLeavesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    leave: leaveReducer,
    myLeaves: myLeavesReducer,
  },
});
