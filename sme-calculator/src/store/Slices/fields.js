import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CDD_CoLOs: "",
  Lmc: "",
  Ssmpc: "",
  Pr: "",
  RonpDr: "",
  Vscc: "",
  Vo: "",
  VcSprbSME: "",
  VcSvwcpp: "",
  TcKb: "",
  TcCb: "",
  AtcCc: "",
  AtcMc: "",
  AtcSc: "",
  Cotrbec: "",
};

export const fieldSlice = createSlice({
  name: "fields",
  initialState,
  reducers: {
    setValue(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setValue } = fieldSlice.actions;
export default fieldSlice.reducer;
