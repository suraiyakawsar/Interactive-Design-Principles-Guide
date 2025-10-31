import React, { useState } from 'react';

const UnrestrictedInput = () => {
    const [value, setValue] = useState('5');
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setValue(val);
        const num = Number(val);
        if (val === '') {
            setError('Quantity cannot be empty.');
        } else if (isNaN(num) || num < 1 || num > 10) {
            setError('Please enter a number between 1 and 10.');
        } else {
            setError('');
        }
    };

    return (
        <div className="space-y-2">
            <label htmlFor="quantity-text" className="text-gray-300">Quantity (1-10)</label>
            <input
                id="quantity-text"
                type="text"
                value={value}
                onChange={handleChange}
                className={`w-full p-2 rounded bg-gray-900 border ${error ? 'border-red-500' : 'border-gray-600'} text-white`}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};

const PreventativeInput = () => {
    const [value, setValue] = useState(5);
    return (
         <div className="space-y-2">
            <label htmlFor="quantity-slider" className="text-gray-300">Quantity: <span className="font-bold text-cyan-400">{value}</span></label>
            <input
                id="quantity-slider"
                type="range"
                min="1"
                max="10"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
             <p className="text-green-500 text-sm h-5">It's impossible to enter an invalid amount.</p>
        </div>
    );
};

export const ErrorPreventionVisual: React.FC = () => {
    const [isPreventative, setIsPreventative] = useState(false);

    return (
         <div className="w-full max-w-md h-72 flex flex-col items-center justify-center p-4">
            <div className="w-full h-48 flex flex-col justify-center p-8 border-2 border-dashed border-gray-700 rounded-lg">
                {isPreventative ? <PreventativeInput /> : <UnrestrictedInput />}
            </div>
             <div className="mt-4 flex items-center space-x-4">
                <span className={`text-sm ${!isPreventative ? 'text-white' : 'text-gray-500'}`}>Unsafe Input</span>
                <button
                    onClick={() => setIsPreventative(!isPreventative)}
                    className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors bg-gray-600"
                    aria-label="Toggle input type"
                >
                    <span
                        className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${isPreventative ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                </button>
                <span className={`text-sm ${isPreventative ? 'text-white' : 'text-gray-500'}`}>Preventative Input</span>
            </div>
        </div>
    );
};