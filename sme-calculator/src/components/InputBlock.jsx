import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setValue } from "../store/Slices/fields";

export const InputBlock = ({
  id,
  mainText,
  comment,
  counter,
  state_name,
  counting_function,
}) => {
  const dispatch = useDispatch();

  const initial_state = useSelector((state) => state.fields);
  const needed_element = initial_state.find((el) => el.name === state_name);
  const value_from_store = needed_element.value;
  const result_from_store = needed_element.points;
  const [fieldValue, setfieldValue] = useState(value_from_store);
  const [result, setResult] = useState(result_from_store);

  const count_poinst = (event) => {
    const target = event.target.value;

    const points = counting_function(target);

    const new_field_state = {
      name: state_name,
      value: target,
      points: points,
    };

    dispatch(setValue(new_field_state));
    setfieldValue(target);
    setResult(points);
  };

  useEffect(() => {
    setfieldValue(value_from_store);
    setResult(result_from_store);
  }, [value_from_store, result_from_store]);

  return (
    <>
      <div>{mainText}</div>
      <div>
        <input
          type="number"
          id={id}
          value={fieldValue}
          onChange={(e) => {
            count_poinst(e);
          }}
        />
      </div>
      <div>{result}</div>
    </>
  );
};
