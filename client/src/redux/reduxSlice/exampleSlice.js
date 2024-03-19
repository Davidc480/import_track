import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 10,
};

export const exampleSlice = createSlice({
  name: "example",
  initialState: initialState.counter,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});

export default exampleSlice.reducer;
export const { increment, decrement } = exampleSlice.actions;
