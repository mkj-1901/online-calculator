import React from 'react';
import "tailwindcss";

const additionalButtons = ['Clear', 'History'];
const Numpad = ({ onButtonClick }) => {
    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+'
    ];
    const allButtons = [...buttons, ...additionalButtons];

    return (
        <div className="grid grid-cols-4 gap-2 p-5 w-full">
            {allButtons.map((button) => (
                <button
                    key={button}
                    className="p-4 text-lg text-white border border-gray-300 rounded cursor-pointer transition hover:bg-gray-700 flex items-center justify-center"
                    style={{
                        backgroundColor: '#070921',
                    }}
                    onClick={() => onButtonClick(button)}
                >
                    {button}
                </button>
            ))}
        </div>
    );
};

export default Numpad;