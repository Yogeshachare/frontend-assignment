import React, { useEffect, useState } from "react";
import { Puff } from "react-loader-spinner";
import "./StockData.css";

const StockData = ({ result, setError, error, setShowData }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const handleGoBack = () => {
    setShowData((data) => !data);
    setError(false);
  };
  return (
    <>
      {loading ? (
        <Puff color="#2596be" height={70} width={70} />
      ) : (
        <div className="assignment__main_info slide-bottom">
          {!error ? (
            <>
              <div className="assignment__main_info-data">
                <h1>Open:</h1>
                <h2>{result.o}</h2>
              </div>
              <div className="assignment__main_info-data">
                <h1>High:</h1>
                <h2>{result.h}</h2>
              </div>
              <div className="assignment__main_info-data">
                <h1>Low:</h1>
                <h2>{result.l}</h2>
              </div>
              <div className="assignment__main_info-data">
                <h1>Close:</h1>
                <h2>{result.c}</h2>
              </div>
              <div className="assignment__main_info-data">
                <h1>Volume:</h1>
                <h2>{result.v}</h2>
              </div>
            </>
          ) : (
            <p className="assignment__main_info-error">
              Please Enter Data Properly or No Data is Available for given Date
            </p>
          )}
          <button type="button" className="customButton" onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      )}
    </>
  );
};

export default StockData;
