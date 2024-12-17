import logo from "./logo.svg";
import "./App.css";
import { InputBlock } from "./components/InputBlock";
import { field_parameters } from "./constants";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { resetValues } from "./store/Slices/fields";

import { Workbook } from "exceljs";
import { saveAs } from "file-saver";

function App() {
  const dispatch = useDispatch();
  const resetButtonEvent = () => {
    dispatch(resetValues());
  };

  const headerCellStyle = {
    font: { name: "Calibri", bold: true, color: { argb: "FF000000" }, size: 9 },
    fill: { type: "pattern", pattern: "solid", fgColor: { argb: "FF41D5E9" } },
    alignment: { horizontal: "center", vertical: "middle" },
  };

  const mainTextStyle = {
    font: { name: "Calibri", color: { argb: "FF000000" }, size: 9 },
    fill: { type: "pattern", pattern: "solid", fgColor: { argb: "FFC0F1F8" } },
    alignment: { horizontal: "left", wrapText: true, vertical: "middle" },
  };
  const commentTextStyle = {
    font: {
      name: "Calibri",
      italic: true,
      color: { argb: "FF757171" },
      size: 9,
    },
    fill: { type: "pattern", pattern: "solid", fgColor: { argb: "FFC0F1F8" } },
    alignment: { horizontal: "left", vertical: "middle" },
  };
  const sectionHeaderStyle = {
    font: {
      name: "Calibri",
      italic: true,
      color: { argb: "FF000000" },
      size: 9,
    },
    fill: { type: "pattern", pattern: "solid", fgColor: { argb: "FFE7E6E6" } },
    alignment: { horizontal: "left", vertical: "middle" },
  };
  const valueCellStyle = {
    font: {
      name: "Calibri",
      color: { argb: "FF000000" },
      size: 9,
    },
    alignment: { horizontal: "center", vertical: "middle" },
    border: {
      top: { style: "thin", color: { argb: "FF000000" } },
      right: { style: "thin", color: { argb: "FF000000" } },
      bottom: { style: "thin", color: { argb: "FF000000" } },
      left: { style: "thin", color: { argb: "FF000000" } },
    },
  };

  const [sheetData, setSheetData] = useState([]);

  const generateExcelWithFormulas = async (sheetData) => {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet("Sheet1");

    // Устанавливаем ширину колонок
    worksheet.columns = [
      { width: 50 }, // Activity's Name
      { width: 15 }, // Input
      { width: 15 }, // Points
      { width: 20 }, // Points Total
    ];

    // Добавляем данные с форматированием
    sheetData.forEach((row, rowIndex) => {
      const excelRow = worksheet.addRow(
        row.map((cell) => (cell?.f ? null : cell.v || cell))
      );

      row.forEach((cell, colIndex) => {
        const excelCell = excelRow.getCell(colIndex + 1);

        // Устанавливаем стиль ячейки
        if (cell?.s) excelCell.style = cell.s;
        if (cell?.f) {
          excelCell.value = { formula: cell.f };
        }
      });
    });

    // Объединение ячеек
    worksheet.mergeCells("D2:D4");
    worksheet.mergeCells("B3:B4");
    worksheet.mergeCells("C3:C4");
    worksheet.mergeCells("B5:B6");
    worksheet.mergeCells("C5:C6");
    worksheet.mergeCells("B7:B8");
    worksheet.mergeCells("C7:C8");
    worksheet.mergeCells("B9:B10");
    worksheet.mergeCells("C9:C10");
    worksheet.mergeCells("B11:B12");
    worksheet.mergeCells("C11:C12");
    worksheet.mergeCells("B14:B15");
    worksheet.mergeCells("C14:C15");
    worksheet.mergeCells("B16:B17");
    worksheet.mergeCells("C16:C17");
    worksheet.mergeCells("B18:B19");
    worksheet.mergeCells("C18:C19");
    worksheet.mergeCells("B20:B21");
    worksheet.mergeCells("C20:C21");
    worksheet.mergeCells("B23:B24");
    worksheet.mergeCells("C23:C24");
    worksheet.mergeCells("B25:B26");
    worksheet.mergeCells("C25:C26");
    worksheet.mergeCells("B27:B28");
    worksheet.mergeCells("C27:C28");
    worksheet.mergeCells("B29:B30");
    worksheet.mergeCells("C29:C30");
    worksheet.mergeCells("B31:B32");
    worksheet.mergeCells("C31:C32");
    worksheet.mergeCells("B33:B34");
    worksheet.mergeCells("C33:C34");
    // Сохранение файла
    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), "example_with_formulas.xlsx");
  };

  const result_points = useSelector((state) => state.fields);
  const [PointsTotal, setPointsTotal] = useState("");

  useEffect(() => {
    console.log(result_points);
    const result_values = result_points.reduce((sum, el) => {
      sum += el.points ? parseFloat(el.points) : 0;
      return sum;
    }, 0);

    if (result_values) {
      setPointsTotal(result_values.toFixed(1).toString());
    } else {
      setPointsTotal("");
    }
  }, [result_points]);

  useEffect(() => {
    const array_of_cells = [
      [
        { v: "Activity's Name", s: headerCellStyle },
        { v: "Input", s: headerCellStyle },
        { v: "Points", s: headerCellStyle },
        { v: "Points Total", s: headerCellStyle },
      ],
    ];
    let cells_counter = 2;

    field_parameters.forEach((el) => {
      const needed_state_field = result_points.find(
        (obj) => obj.name === el.state_name
      );

      // Добавление заголовков
      if (el.state_name === "CDD_CoLOs") {
        array_of_cells.push([
          { v: "Text-Based Activities", s: sectionHeaderStyle },
          "",
          "",
          {
            s: valueCellStyle,
            f: "=ROUND(SUM(C3,C5,C7,C9,C11,C14,C16,C18,C20,C23,C25,C27,C29,C31,C33),1)",
          },
        ]);
        cells_counter += 1;
      }
      if (el.state_name === "Vscc") {
        array_of_cells.push([
          { v: "Video-Based Content", s: sectionHeaderStyle },
          "",
          "",
          "",
        ]);
        cells_counter += 1;
      }
      if (el.state_name === "TcKb") {
        array_of_cells.push([
          { v: "Assessment / Quiz-based content", s: sectionHeaderStyle },
          "",
          "",
          "",
        ]);
        cells_counter += 1;
      }

      const title = el.mainText;
      const comment = el.comment;
      const formula = el.excel_formula(cells_counter);

      const main_field_row = [
        { v: title, s: mainTextStyle },
        {
          v: needed_state_field?.value ? parseInt(needed_state_field.value) : 0,
          s: valueCellStyle,
        },
        { f: formula, s: valueCellStyle },
        "",
      ];
      const comment_field_row = [
        { v: comment, s: commentTextStyle },
        "",
        "",
        "",
      ];

      array_of_cells.push(main_field_row, comment_field_row);
      cells_counter += 2;
    });

    setSheetData(array_of_cells);
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
      <button onClick={() => resetButtonEvent()}>Reset</button>
    </>
  );
}

export default App;
