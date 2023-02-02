import { configureStore } from "@reduxjs/toolkit";
import { stateSlice } from "./state/stateSlice";

export const store = configureStore({
  reducer: { states: stateSlice.reducer },
});
