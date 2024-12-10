import logo from "./logo.svg";
import "./App.css";
import { InputBlock } from "./components/InputBlock";
import { field_parameters } from "./constants";
import { useSelector, useStore } from "react-redux";
import { useEffect, useState } from "react";

import ReactExport from "react-data-export";
import JSZip from "jszip";

import XLSX from "xlsx";

function App() {
  /* const sheetData = [
    ["Value", "Formula"],
    [10, { f: "A2*2" }],
  ]; */

  const [sheetData, SetSheetData] = useState([]);

  const generateExcelWithFormulas = (sheetData) => {
    // Создаем новую рабочую книгу
    const workbook = XLSX.utils.book_new();

    // Данные для листа

    // Создаем рабочий лист
    const worksheet = XLSX.utils.aoa_to_sheet(sheetData);

    // Добавляем лист в книгу
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Генерируем и скачиваем файл
    XLSX.writeFile(workbook, "example_with_formulas.xlsx");
  };

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

  useEffect(() => {
    const array_of_cells = [];

    for (const key in result_points) {
      if (result_points[key]) {
        const needed_object = field_parameters.find((el) => {
          return el.state_name == key;
        });

        const title = needed_object.mainText;
        const formula = needed_object.excel_formula(1);
        array_of_cells.push([title, result_points[key], { f: formula }]);
      }
    }

    SetSheetData(array_of_cells);
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

      <p>Click the button below to export</p>
      <button
        onClick={() => {
          generateExcelWithFormulas(sheetData);
        }}
      >
        Download Excel
      </button>
    </>
  );
}

export default App;
