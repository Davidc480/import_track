import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HOST } from "@/env";

export const fetchDataBannerPost = createAsyncThunk(
  "dataBannerPost/fetchDataBannerPost",
  async () => {
    const response = await fetch(`${HOST}/dataBanner/createDataBanner`);
    const data = await response.json();
    return data;
  }
);

export const dataBannerPostSlice = createSlice({
  name: "dataBannerPost",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataBannerPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDataBannerPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchDataBannerPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default dataBannerPostSlice.reducer;
