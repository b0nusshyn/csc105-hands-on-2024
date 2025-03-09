import React, { useState } from "react";
import "../styles/Calculator.css";


const Calculator = () => {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleOperation = (operation) => {
    const num = parseFloat(input);
    if (isNaN(num)) return;

    switch (operation) {
      case "add":
        setResult(result + num);
        break;
      case "subtract":
        setResult(result - num);
        break;
      case "multiply":
        setResult(result * num);
        break;
      case "divide":
        if (num !== 0) {
          setResult(result / num);
        } else {
          alert("Cannot divide by zero!");
        }
        break;
      default:
        break;
    }
    setInput(""); 
  };

  const resetInput = () => setInput("");
  const resetResult = () => setResult(0);

  return (
    <div className="calculator-container">
      <div className="calculator-box">
        <h2>Simple Calculator</h2>
        <h3>Result: {result}</h3>
        <input 
          type="text" 
          value={input} 
          onChange={handleInputChange} 
          placeholder="Enter a number" 
          className="calculator-input"
        />
        <div className="button-container">
          <button className="calculator-button" onClick={() => handleOperation("add")}>Add</button>
          <button className="calculator-button" onClick={() => handleOperation("subtract")}>Subtract</button>
          <button className="calculator-button" onClick={() => handleOperation("multiply")}>Multiply</button>
          <button className="calculator-button" onClick={() => handleOperation("divide")}>Divide</button>
        </div>
        <div className="button-container">
          <button className="reset-button" onClick={resetInput}>Reset Input</button>
          <button className="reset-button-red" onClick={resetResult}>Reset Result</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
