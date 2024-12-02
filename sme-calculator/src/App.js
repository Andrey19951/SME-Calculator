import logo from "./logo.svg";
import "./App.css";
import { InputBlock } from "./components/InputBlock";
import { field_parameters } from "./constants";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  const result_points = useSelector((state) => state.fields);
  const [PointsTotal, SetPointsTotal] = useState("");
  useEffect(() => {
    const result_values = Object.values(result_points).reduce((sum, el) => {
      sum += el ? parseFloat(el) : 0;
      return sum;
    }, 0);

    if (result_values) {
      const result = result_values.toFixed(1).toString();
      SetPointsTotal(result);
    } else {
      SetPointsTotal("");
    }
  }, [result_points]);

  return (
    <>
      <div className="main">
        <div className="working-place">
          <div className="working-place__row">
            <div>Activity's Name</div>
            <div>Input</div>
            <div>Points</div>
          </div>
          {field_parameters.map((el, i) => {
            return (
              <div className="working-place__row" key={i}>
                <InputBlock
                  mainText={el.mainText}
                  state_name={el.state_name}
                  counting_function={el.counting_functions}
                />
              </div>
            );
          })}
        </div>
        <div className="result-ouput">
          <div>Points Total</div>
          <div>{PointsTotal}</div>
        </div>
      </div>
    </>
  );
}

export default App;
