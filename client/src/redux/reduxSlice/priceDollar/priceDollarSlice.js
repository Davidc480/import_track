import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HOST } from "@/env";
export const fetchPriceDollar = createAsyncThunk(
  "priceDolar/fetchPriceDollar",
  async () => {
    const response = await fetch(`${HOST}/dollarPrice/current-price-dolar`);
    const data = await response.json();
    return data;
  }
);

export const priceDollarSlice = createSlice({
  name: "priceDollar",
  initialState: {
    data: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPriceDollar.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchPriceDollar.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchPriceDollar.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default priceDollarSlice.reducer;
