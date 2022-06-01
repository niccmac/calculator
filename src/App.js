import "./App.css";
import React, { useState } from "react";

function App() {
  //State
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  // Operators
  const ops = ["/", "*", "+", "-", "."];

  // Calculator function

  const updateCalc = (value) => {
    setCalc(calc + value);
  };

  return (
    <div className="App">
      <div className="calaculator">
        <div className="calc-display">
          <span>(0) </span>
          {calc}
        </div>
        <div className="calc-operators">
          <button>/</button>
          <button>*</button>
          <button>+</button>
          <button>-</button>
          <button>DELETE</button>
        </div>
        <div className="calc-numbers">
          <button>0</button>
          <button>.</button>
          <button>=</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
        </div>
      </div>
    </div>
  );
}

export default App;
