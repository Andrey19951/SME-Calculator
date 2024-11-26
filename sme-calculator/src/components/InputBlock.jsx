import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setValue } from "../store/Slices/fields";

export const InputBlock = ({}) => {
  const dispatch = useDispatch();

  const value = useSelector((state) => state.fields.value);

  return (
    <>
      <div>{value}</div>
      <button
        onClick={() => {
          dispatch(setValue("Valera"));
        }}
      >
        click me
      </button>
    </>
  );
};
