import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    username: localStorage.getItem("username")
      ? localStorage.getItem("username")
      : "",
    password: "",
    isLoggedIn: false,
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    checkLogin: (state, action) => {
      if (
        state.username === action.payload.username &&
        state.password === action.payload.password
      ) {
        state.isLoggedIn = true;
        localStorage.setItem("username", state.username);
      }
    },
  },
});

export const { setUsername, setPassword, checkLogin } = loginSlice.actions;

export default loginSlice.reducer;
