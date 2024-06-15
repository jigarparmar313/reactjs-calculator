import Display from "./Simple_Cal/Display";
import BtnsContainer from "./Simple_Cal/BtnsContainer";
import { useState, useEffect } from "react";
import Heading from "./Simple_Cal/Heading";
import styles from "./App.module.css";

const App = () => {
  const [calVal, setCalVal] = useState("");

  // Function to handle button click
  const onBtnClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      calculateResult();
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  // Function to handle keyboard events
  const handleKeyDown = (event) => {
    const { key } = event;
    if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
      setCalVal(calVal + key);
    } else if (key === 'Enter') {
      calculateResult();
    } else if (key === 'Backspace') {
      setCalVal("");
    }
  };

  // Function to calculate result
  const calculateResult = () => {
    try {
      const result = eval(calVal);
      setCalVal(result.toString());
    } catch (error) {
      console.error('Invalid input');
      setCalVal("");
    }
  };

  // Effect to add event listener for keyboard events
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div className={styles.calculator}>
      <Heading />
      <Display displayValue={calVal} />
      <BtnsContainer onBtnClick={onBtnClick} />
    </div>
  );
};

export default App;
