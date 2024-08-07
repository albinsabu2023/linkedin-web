import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/UserSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
