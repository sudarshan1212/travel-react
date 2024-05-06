import { configureStore } from "@reduxjs/toolkit";
import  TravelReducer from "./TravelSlice";
export const store = configureStore({
  reducer: {
    travel: TravelReducer,
  },
});
