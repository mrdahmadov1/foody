import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../firebase";

export const fetchOrdersData = createAsyncThunk("data/fetchData", async () => {
  const response = await axiosInstance.get("/orders.json");
  return response.data;
});

export const chartSlice = createSlice({
  name: "charts",
  initialState: {
    loading: false,
    error: null,
    doughnutData: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrdersData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrdersData.fulfilled, (state, action) => {
        state.loading = false;
        state.doughnutData = action.payload;
      })
      .addCase(fetchOrdersData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default chartSlice.reducer;
