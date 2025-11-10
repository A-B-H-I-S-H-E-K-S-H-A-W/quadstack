import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "./slice/client-slice";

export const store = configureStore({
  reducer: {
    client: clientReducer,
  },
});

export default store;
