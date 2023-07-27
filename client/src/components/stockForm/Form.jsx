import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import "./Form.css";

const Form = ({ setShowData, setResult, setError }) => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  const [date, setDate] = useState("");
  const [symbol, setSymbol] = useState("");

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const handleClick = async () => {
    if (symbol) {
      setShowData((data) => !data);

      try {
        const formatedDate = formatDate(date);
        const jsonBody = { ticker: symbol.toUpperCase(), date: formatedDate };
        const res = await axios.post(
          "http://localhost:5000/api/fetchStockData",
          jsonBody
        );
        setResult(res.data[0]);
      } catch (error) {
        setError(true);
      }
    }
  };
  return (
    <div className="assignment__main-form">
      <p>Trade Symbol:</p>
      <input
        placeholder="Trade symbol"
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />
      <p>Date:</p>
      <DatePicker
        value={date}
        format="y-MM-dd"
        onChange={setDate}
        maxDate={d}
      />
      <div className="assignment__main_form-button">
        <button className="customButton" type="button" onClick={handleClick}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
