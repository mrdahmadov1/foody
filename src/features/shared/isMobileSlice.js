import { createSlice } from "@reduxjs/toolkit";

const isMobileSlice = createSlice({
  name: "isMobile",
  initialState: {
    isMobile: false,
  },
  reducers: {
    setIsMobile: (state, action) => {
      state.isMobile = action.payload;
    },
  },
});

export const { setIsMobile } = isMobileSlice.actions;
export default isMobileSlice.reducer;
