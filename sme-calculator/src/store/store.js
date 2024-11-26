import { configureStore } from "@reduxjs/toolkit";
import fieldSlice from "./Slices/fields";

const store = configureStore({
  reducer: {
    fields: fieldSlice,
  },
});

export default store;
