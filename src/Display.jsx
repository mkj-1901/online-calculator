import React, { useState } from 'react';
import './display.css';
import Numpad from './Numpad';

const Display = () => {
    const [value, setValue] = useState("");
    const [history, setHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);
    const [newCalculation, setNewCalculation] = useState(false);

    const handleButtonClick = (buttonValue) => {
        if (buttonValue === "=") {
            try {
                const result = eval(value).toString();
                setHistory([...history, `${value} = ${result}`]);
                setValue(result);
                setNewCalculation(true);
            } catch {
                setValue("Error");
                setNewCalculation(true);
            }
        } else if (buttonValue === "C") {
            setValue("");
            setNewCalculation(false);
        } else if (buttonValue === "History") {
            setShowHistory(!showHistory);
        } else {
            if (newCalculation && !isNaN(buttonValue)) {
                setValue(buttonValue);
            } else {
                setValue(value + buttonValue);
            }
            setNewCalculation(false);
        }
    };

    return (
        <div className="calculator-container">
            <div className="display-tile">
                <input
                    type="text"
                    className="display-input"
                    value={value}
                    readOnly
                />
            </div>
            <Numpad onButtonClick={handleButtonClick} />
            {showHistory && (
                <div className="history">
                    <h3>History</h3>
                    <ul>
                        {history.map((entry, index) => (
                            <li key={index}>{entry}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Display;

