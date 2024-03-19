import { configureStore } from "@reduxjs/toolkit";
import exampleSliceReducer from "./reduxSlice/exampleSlice";

export const store = configureStore({
  reducer: {
    example: exampleSliceReducer,
  },
});
