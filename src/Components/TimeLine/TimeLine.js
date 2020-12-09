import React, { useState } from "react";
import "./TimeLine.css";

const TimeLine = ({ changeYear }) => {
  const [isActive, setIsActive] = useState('1Y');

  return (
    <div className="timeLine">
      <div className="timeLine__buttonsContainer">
        <div className="timeLine__button">LIVE</div>
        <div
          className={`timeLine__button ${isActive === '1D' && "active"}`}
          onClick={(e) => {
            changeYear(1);
            setIsActive(e.target.textContent);
          }}
        >
          1D
        </div>
        <div
          className={`timeLine__button ${isActive === '1W' && "active"}`}
          onClick={(e) => {
            changeYear(7);
            setIsActive(e.target.textContent);
          }}
        >
          1W
        </div>
        <div
          className={`timeLine__button ${isActive === '3M' && "active"}`}
          onClick={(e) => {
            changeYear(21);
            setIsActive(e.target.textContent);
          }}
        >
          3M
        </div>
        <div
          className={`timeLine__button ${isActive === '1Y' && "active"}`}
          onClick={(e) => {
            changeYear(365);
            setIsActive(e.target.textContent);
          }}
        >
          1Y
        </div>
        <div className="timeLine__button">ALL</div>
      </div>
    </div>
  );
};

export default TimeLine;
