import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access_token: "",
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.access_token = action.payload.access_token;
    },
  },
});

export const { setToken } = UserSlice.actions;

export default UserSlice.reducer;
