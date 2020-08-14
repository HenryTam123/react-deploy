import React, { useState } from "react";
import { Link } from "react-router-dom";

const Calculator = () => {
  const [screenText, setScreenText] = useState("");

  const handleClick = (e) => {
    if (e.target.classList[0] === "calculator-buttons") {
      setScreenText(screenText + e.target.dataset.num);
    } else if (e.target.classList[0] === "calculator-buttons2") {
      setScreenText("");
    } else if (e.target.classList[0] === "calculator-buttons3") {
      const value = eval(screenText);
      setScreenText(value);
    }
  };

  return (
    <div className="calculator-page">
      <Link to="/project">
        <button className="back-button">Return</button>
      </Link>
      <h2>Tam's Calculator</h2>
      <div className="calculator-container">
        <div className="calculator-display">
          <span className="screen">{screenText}</span>
        </div>
        <button
          type="button"
          className="calculator-buttons"
          data-num="1"
          onClick={handleClick}
        >
          1
        </button>
        <button
          type="button"
          className="calculator-buttons"
          data-num="2"
          onClick={handleClick}
        >
          2
        </button>
        <button
          type="button"
          className="calculator-buttons"
          data-num="3"
          onClick={handleClick}
        >
          3
        </button>
        <button
          type="button"
          className="calculator-buttons"
          data-num="+"
          onClick={handleClick}
        >
          +
        </button>
        <button
          type="button"
          className="calculator-buttons"
          data-num="4"
          onClick={handleClick}
        >
          4
        </button>
        <button
          type="button"
          className="calculator-buttons"
          data-num="5"
          onClick={handleClick}
        >
          5
        </button>
        <button
          type="button"
          className="calculator-buttons"
          data-num="6"
          onClick={handleClick}
        >
          6
        </button>
        <button
          type="button"
          className="calculator-buttons"
          data-num="-"
          onClick={handleClick}
        >
          -
        </button>
        <button
          type="button"
          className="calculator-buttons"
          data-num="7"
          onClick={handleClick}
        >
          7
        </button>
        <button
          type="button"
          className="calculator-buttons"
          data-num="8"
          onClick={handleClick}
        >
          8
        </button>
        <button
          type="button"
          className="calculator-buttons"
          data-num="9"
          onClick={handleClick}
        >
          9
        </button>
        <button
          type="button"
          className="calculator-buttons"
          data-num="*"
          onClick={handleClick}
        >
          x
        </button>
        <button
          type="button"
          className="calculator-buttons"
          data-num="0"
          onClick={handleClick}
        >
          0
        </button>
        <button
          type="button"
          className="calculator-buttons"
          data-num="."
          onClick={handleClick}
        >
          .
        </button>
        <button
          type="button"
          className="calculator-buttons3"
          onClick={handleClick}
        >
          =
        </button>
        <button
          type="button"
          className="calculator-buttons"
          data-num="/"
          onClick={handleClick}
        >
          ÷
        </button>
        <button
          type="button"
          className="calculator-buttons2"
          onClick={handleClick}
        >
          C
        </button>

        <button
          type="button"
          className="calculator-buttons"
          data-num="/"
          onClick={handleClick}
        >
          ÷
        </button>
        <button
          type="button"
          className="calculator-buttons"
          data-num="/"
          onClick={handleClick}
        >
          ÷
        </button>
        <button
          type="button"
          className="calculator-buttons"
          data-num="/"
          onClick={handleClick}
        >
          ÷
        </button>
      </div>
    </div>
  );
};

export default Calculator;
