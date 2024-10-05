import { useState } from 'react';
import './App.css';

function Key({ label, clickHandler }) {
  return (
    <button onClick={clickHandler}>
      {label}
    </button>
  );
}

function Display({ display }) {
  return (
    <div className="Display">
      {display}
    </div>
  );
}

function App() {
  const [disp, setdisp] = useState('0');
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);
  
  // Function to handle number input
  const handleNumberClick = (value) => {
    if (op === null) {
      if (num1 === null) {
        setNum1(value);
      } else {
        setNum1(num1 + value);
      }
      setdisp(num1 === null ? value : num1 + value);
    } else {
      if (num2 === null) {
        setNum2(value);
      } else {
        setNum2(num2 + value);
      }
      setdisp(num2 === null ? value : num2 + value);
    }
  };

  // Function to handle operator input
  const handleOperatorClick = (value) => {
    if (num1 !== null && num2 !== null) {
      const result = calculate(num1, op, num2);
      setNum1(result.toString());
      setNum2(null);
      setOp(value);
      setdisp(result.toString());
    } else {
      setOp(value);
      setdisp(value);
    }
  };

  // Function to calculate the result based on two numbers and an operator
  const calculate = (num1, operator, num2) => {
    switch (operator) {
      case '+':
        return parseFloat(num1) + parseFloat(num2);
      case '-':
        return parseFloat(num1) - parseFloat(num2);
      case '*':
        return parseFloat(num1) * parseFloat(num2);
      case '÷':
        return parseFloat(num1) / parseFloat(num2);
      default:
        return "Error";
    }
  };

  // Function to handle equals button
  const handleEqualsClick = () => {
    if (num1 !== null && num2 !== null && op !== null) {
      const result = calculate(num1, op, num2);
      setdisp(result.toString());
      setNum1(result.toString()); // Set the result as the first number for further calculations
      setNum2(null); // Clear second number
      setOp(null); // Clear operator
    }
  };

  // Function to handle clear button
  const handleClear = () => {
    setNum1(null);
    setNum2(null);
    setOp(null);
    setdisp('0');
  };

  // Function to handle surname button
  const handleSurnameClick = () => {
    setdisp('SHAWN ASHLEE GUARIN');
  };

  return (
    <div className="App">
      <div className="CalcContainer">
        <h2>Calculator of SHAWN ASHLEE GUARIN - IT3A</h2>
        <div className="DispContainer">
          <Display display={disp} />
        </div>
        <div className="ButtonContainer">
          <Key label={7} clickHandler={() => handleNumberClick('7')} />
          <Key label={8} clickHandler={() => handleNumberClick('8')} />
          <Key label={9} clickHandler={() => handleNumberClick('9')} />
          <Key label={"÷"} clickHandler={() => handleOperatorClick('÷')} />
          <Key label={4} clickHandler={() => handleNumberClick('4')} />
          <Key label={5} clickHandler={() => handleNumberClick('5')} />
          <Key label={6} clickHandler={() => handleNumberClick('6')} />
          <Key label={"*"} clickHandler={() => handleOperatorClick('*')} />
          <Key label={1} clickHandler={() => handleNumberClick('1')} />
          <Key label={2} clickHandler={() => handleNumberClick('2')} />
          <Key label={3} clickHandler={() => handleNumberClick('3')} />
          <Key label={"-"} clickHandler={() => handleOperatorClick('-')} />
          <Key label={"C"} clickHandler={handleClear} />
          <Key label={0} clickHandler={() => handleNumberClick('0')} />
          <Key label={"="} clickHandler={handleEqualsClick} />
          <Key label={"+"} clickHandler={() => handleOperatorClick('+')} />
        </div>
        <button id="surname-button" onClick={handleSurnameClick}>GUARIN</button>
      </div>
    </div>
  );
}

export default App;