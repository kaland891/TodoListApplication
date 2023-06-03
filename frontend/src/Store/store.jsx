import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../ToDoSlice";
import AuthReducer from "../UserSlice"; // Assuming you have an AuthSlice

const store = configureStore({
  reducer: {
    todo: TodoReducer,
    auth: AuthReducer,
  },
});

export default store;
