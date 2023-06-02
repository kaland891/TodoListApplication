import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access_token: "",
  token_type: "bearer",
  UserName: "",
  email: "bfx@example.com",
  id: 0,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.access_token = action.payload.access_token;
      state.token_type = action.payload.token_type;
    },
    setUsername: (state, action) => {
      state.UserName = action.payload.UserName;
    },
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },
    setId: (state, action) => {
      state.id = action.payload.id;
    },
  },
});

export const { setToken, setUsername, setEmail, setId } = UserSlice.actions;

export default UserSlice.reducer;
