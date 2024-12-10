import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user-slice"; // Import the unified slice reducer

const store = configureStore({
  reducer: {
    users: userReducer, // Assign the single unified user slice here
  },
});

export default store;
