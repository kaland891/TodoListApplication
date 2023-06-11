import { createSlice } from "@reduxjs/toolkit";
const storedTokenString = localStorage.getItem("access_token");
const storedToken = storedTokenString
  ? JSON.parse(storedTokenString).access_token
  : null;
const initialState = {
  access_token: storedToken || "", // 如果本地存储中有令牌，则使用本地令牌，否则为空字符串
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
