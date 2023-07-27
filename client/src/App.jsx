import React, { useState } from "react";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "./App.css";
import { Form, StockData } from "./components";

const App = () => {
  const [showData, setShowData] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  return (
    <div className="assignment__main">
      <div className="assignment__main_background">
        {!showData ? (
          <Form
            setShowData={setShowData}
            setResult={setResult}
            setError={setError}
          />
        ) : (
          <StockData
            result={result}
            error={error}
            setError={setError}
            setShowData={setShowData}
          />
        )}
      </div>
    </div>
  );
};

export default App;
