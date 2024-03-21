import { configureStore } from "@reduxjs/toolkit";
import exampleSliceReducer from "./reduxSlice/exampleSlice";
import dateCounterSlice from "./reduxSlice/dateCounter/dateCounterSlice";

export const store = configureStore({
  reducer: {
    example: exampleSliceReducer,
    datesCounter: dateCounterSlice,
  },
});
