import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HOST } from "@/env";

export const fetchDataBannerGet = createAsyncThunk(
  "dataBanner/fetchDataBanner",
  async () => {
    const response = await fetch(`${HOST}/dataBanner/dataBanner`);
    const data = await response.json();
    return data;
  }
);

export const dataBannerGetSlice = createSlice({
  name: "dataBannerGet",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataBannerGet.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDataBannerGet.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchDataBannerGet.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default dataBannerGetSlice.reducer;
