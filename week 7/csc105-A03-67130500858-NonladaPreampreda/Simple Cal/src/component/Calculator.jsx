import { useState } from "react";
import "../style/Calculator.css"; // Import CSS

function Calculator() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");

  const calculate = (operation) => {
    const num = parseFloat(input);
    if (isNaN(num)) return;

    setResult((prevResult) => {
      switch (operation) {
        case "add":
          return prevResult + num;
        case "subtract":
          return prevResult - num;
        case "multiply":
          return prevResult === 0 ? num : prevResult * num;
        case "divide":
          return prevResult === 0 ? num : prevResult / num;
        default:
          return prevResult;
      }
    });

    setInput("");
  };

  return (
    <div className="calculator-container">
      <div className="calculator-box">
        <h1 className="title">Simple Calculator</h1>
        <div className="result-box">Result: {result}</div>
        <input
          type="text"
          placeholder="Enter number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input-field"
        />
        <div className="button-grid">
          <button onClick={() => calculate("add")} className="btn btn-blue">
            Add
          </button>
          <button onClick={() => calculate("subtract")} className="btn btn-blue">
            Subtract
          </button>
          <button onClick={() => calculate("multiply")} className="btn btn-blue">
            Multiply
          </button>
          <button onClick={() => calculate("divide")} className="btn btn-blue">
            Divide
          </button>
        </div>
        <div className="button-group">
          <button onClick={() => setInput("")} className="btn btn-red">
            Reset Input
          </button>
          <button onClick={() => setResult(0)} className="btn btn-blue">
            Reset Result
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
