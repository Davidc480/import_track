import { configureStore } from "@reduxjs/toolkit";
import exampleSliceReducer from "./reduxSlice/exampleSlice";
import dateCounterSlice from "./reduxSlice/dateCounter/dateCounterSlice";
import dataBannerGetSlice from "./reduxSlice/dataBanner/dataBannerGetSlice";
import dataBannerPostSlice from "./reduxSlice/dataBanner/dataBannerPostSlice";
import priceDollarSlice from "./reduxSlice/priceDollar/priceDollarSlice";

export const store = configureStore({
  reducer: {
    example: exampleSliceReducer,
    datesCounter: dateCounterSlice,
    dataBannerGet: dataBannerGetSlice,
    dataBannerPost: dataBannerPostSlice,
    priceDollar: priceDollarSlice,
  },
});
