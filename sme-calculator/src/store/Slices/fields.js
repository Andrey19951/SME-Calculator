import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Andrey",
};

export const fieldSlice = createSlice({
  name: "fields",
  initialState,
  reducers: {
    setValue(state, action) {
      return { ...state, value: action.payload };
    },
  },
});

export const { setValue } = fieldSlice.actions;
export default fieldSlice.reducer;
