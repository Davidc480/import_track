import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HOST } from "@/env";

export const fetchDateStatus = createAsyncThunk(
  "dateStatus/fetchDateStatus",
  async ({ brand }) => {
    const response = await fetch(
      `${HOST}/date/import-date-client?brand=${brand}`
    );
    const data = await response.json();
    return data;
  }
);

export const dateStatusSlice = createSlice({
  name: "dateStatus",
  initialState: {
    date: "",
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchDateStatus.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchDateStatus.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.date = action.payload;
      })
      .addCase(fetchDateStatus.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default dateStatusSlice.reducer;
