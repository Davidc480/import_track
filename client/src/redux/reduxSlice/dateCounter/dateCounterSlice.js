import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HOST } from "@/env";

export const fetchDateCounter = createAsyncThunk(
  "dateCounter/fetchDateCounter",
  async () => {
    const response = await fetch(`${HOST}/dateCounter/counter`);
    const data = await response.json();
    return data;
  }
);

export const dateCounterSlice = createSlice({
  name: "dateCounter",
  initialState: {
    dates: [
      { days: 0, hours: 0, minutes: 0, seconds: 0, dateBrand: "default" },
    ],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDateCounter.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDateCounter.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.dates = action.payload;
      })
      .addCase(fetchDateCounter.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default dateCounterSlice.reducer;
