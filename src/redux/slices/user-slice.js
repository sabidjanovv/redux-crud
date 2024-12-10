import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const loadState = () => {
  const savedState = localStorage.getItem("users");
  return savedState ? JSON.parse(savedState) : [];
};

const saveState = (state) => {
  localStorage.setItem("users", JSON.stringify(state));
};

const userSlice = createSlice({
  name: "users",
  initialState: loadState(),
  reducers: {
    addUser: (state, action) => {
      const newUser = { id: uuidv4(), ...action.payload };
      state.push(newUser);
      saveState(state);
    },
    deleteUser: (state, action) => {
      const index = state.findIndex((user) => user.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        saveState(state);
      }
    },
    updateUser: (state, action) => {
      const { id, ...updatedFields } = action.payload;
      const index = state.findIndex((user) => user.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedFields }; // Merge updates with existing user
        saveState(state);
      }
    },

    getUsers: (state) => {
      saveState(state);
    },
  },
});

// Export actions and reducer
export const { addUser, deleteUser, updateUser, getUsers } = userSlice.actions;
export default userSlice.reducer;
