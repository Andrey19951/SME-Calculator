import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setValue } from "../store/Slices/fields";

export const InputBlock = ({ id, mainText, comment, counter, state_name, counting_function }) => {
  const value_from_store = useSelector((state) => state[`${state_name}`]);
  const dispatch = useDispatch();

  const [result, setResult] = useState("");

  const count_poinst = (event) => {
    const target = event.target.value;

    const points = counting_function(target);
    dispatch(setValue({ [state_name]: points }));
    setResult(points);
  };

  return (
    <>
      <div>{mainText}</div>
      <div>
        <input
          type="number"
          id={id}
          value={value_from_store}
          onChange={(e) => {
            count_poinst(e);
          }}
        />
      </div>
      <div>{result}</div>
    </>
  );
};
