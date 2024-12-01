import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setValue } from "../store/Slices/fields";

export const InputBlock = ({ id, mainText, comment, counter, state_name }) => {
  const value_from_store = useSelector((state) => state[`${state_name}`]);
  const dispatch = useDispatch();

  const [result, setResult] = useState(0);

  const count_poinst = (event) => {
    const target = event.target.value;

    const points = parseInt(target) * 2;
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
