import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    username: localStorage.getItem("username")
      ? localStorage.getItem("username")
      : "",
    password: "",
    isLoggedIn: localStorage.getItem("isLoggedIn")
      ? localStorage.getItem("isLoggedIn")
      : false,
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setUsername, setPassword, setIsLoggedIn } = loginSlice.actions;

export default loginSlice.reducer;
