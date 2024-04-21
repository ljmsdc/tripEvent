import { createSlice } from "@reduxjs/toolkit";

const initialState = { id: 0 };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setId(state, action) {
      state.id = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
