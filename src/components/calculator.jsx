import React, { useState } from "react";

const Calculator = () => {
  //State
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  // Operators
  const ops = ["/", "*", "+", "-", "."];

  // Add numbers and operators
  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  // Calculate

  const calaculator = () => {
    setCalc(eval(calc).toString());
  };

  // Delete last

  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };
  return (
    <div className="calaculator">
      <div className="calc-display">
        {result ? <span>({result})</span> : ""}&nbsp;
        {calc || "0"}
      </div>
      <div className="calc-operators">
        <button
          onClick={() => {
            updateCalc("/");
          }}
        >
          /
        </button>
        <button
          onClick={() => {
            updateCalc("*");
          }}
        >
          *
        </button>
        <button
          onClick={() => {
            updateCalc("+");
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            updateCalc("-");
          }}
        >
          -
        </button>

        <button onClick={deleteLast}>DELETE</button>
      </div>
      <div className="calc-numbers">
        <button
          onClick={() => {
            updateCalc("0");
          }}
        >
          0
        </button>
        <button
          onClick={() => {
            updateCalc(".");
          }}
        >
          .
        </button>

        <button onClick={calaculator}>=</button>

        <button
          onClick={() => {
            updateCalc("1");
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            updateCalc("2");
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            updateCalc("3");
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            updateCalc("4");
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            updateCalc("5");
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            updateCalc("6");
          }}
        >
          6
        </button>
        <button
          onClick={() => {
            updateCalc("7");
          }}
        >
          7
        </button>
        <button
          onClick={() => {
            updateCalc("8");
          }}
        >
          8
        </button>
        <button
          onClick={() => {
            updateCalc("9");
          }}
        >
          9
        </button>
      </div>
      <div className="clear-calc">
        <button onClick={() => setCalc("")}>CLEAR</button>
      </div>
    </div>
  );
};
export default Calculator;
