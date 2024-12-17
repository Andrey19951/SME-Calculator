import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { name: "CDD_CoLOs", value: "", points: "" },
  { name: "Lmc", value: "", points: "" },
  { name: "Ssmpc", value: "", points: "" },
  { name: "Pr", value: "", points: "" },
  { name: "RonpDr", value: "", points: "" },
  { name: "Vscc", value: "", points: "" },
  { name: "Vo", value: "", points: "" },
  { name: "VcSprbSME", value: "", points: "" },
  { name: "VcSvwcpp", value: "", points: "" },
  { name: "TcKb", value: "", points: "" },
  { name: "TcCb", value: "", points: "" },
  { name: "AtcCc", value: "", points: "" },
  { name: "AtcMc", value: "", points: "" },
  { name: "AtcSc", value: "", points: "" },
  { name: "Cotrbec", value: "", points: "" },
];

export const fieldSlice = createSlice({
  name: "fields",
  initialState,
  reducers: {
    setValue(state, action) {
      const new_state = state.filter(el => el.name !== action.payload.name);
      return [
        ...new_state, action.payload
      ]
    },
  },
});

export const { setValue } = fieldSlice.actions;
export default fieldSlice.reducer;
