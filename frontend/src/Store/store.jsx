import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../ToDoSlice";
import UserReducer from "../UserSlice";

const store = configureStore({
  reducer: {
    todo: TodoReducer,
    auth: UserReducer,
  },
});

export default store;
