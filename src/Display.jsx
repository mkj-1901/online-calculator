import React, { useState } from 'react';
import Numpad from './Numpad';
import "tailwindcss";

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
        } else if (buttonValue === "Clear") {
            setValue("");
            setNewCalculation(false);
        } else if (buttonValue === "History") {
            setShowHistory(!showHistory);
        } else {
            if (newCalculation && !isNaN(buttonValue)) {
                setValue(buttonValue);
            } else {
                if (["+", "-", "*", "/"].includes(value.slice(-1)) && isNaN(buttonValue)) {
                    setValue(value.slice(0, -1) + buttonValue);
                } else {
                    setValue(value + buttonValue);
                }
            }
            setNewCalculation(false);
        }
    };

    return (
        <div className="flex flex-col items-center w-full">
            <div className="bg-gray-100 border border-gray-300 rounded-md p-4 mb-4 w-full shadow-md">
                <input
                    type="text"
                    className="w-full text-xl text-right border-none outline-none bg-transparent text-gray-800"
                    value={value}
                    readOnly
                />
            </div>
            <Numpad onButtonClick={handleButtonClick} />
            {showHistory && (
                <div className="mt-4 p-4 bg-gray-700 text-white rounded-md w-full text-center shadow-lg">
                    <h3 className="mb-2">History</h3>
                    <ul className="list-none p-0">
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

