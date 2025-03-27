import React from 'react';
import './Numpad.css';

const additionalButtons = ['C', 'History'];
const Numpad = ({ onButtonClick }) => {
    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+'
    ];
    const allButtons = [...buttons, ...additionalButtons];

    return (
        <div className="numpad">
            {allButtons.map((button) => (
                <button
                    key={button}
                    className="numpad-button"
                    onClick={() => onButtonClick(button)}
                >
                    {button}
                </button>
            ))}
        </div>
    );
};

export default Numpad;