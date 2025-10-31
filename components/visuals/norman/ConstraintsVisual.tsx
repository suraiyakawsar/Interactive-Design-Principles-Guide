import React, { useState } from 'react';

const UnconstrainedInput = () => {
    const [date, setDate] = useState('Feb 30, 2024');
    const [error, setError] = useState('This is not a valid date!');
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setDate(val);
        // Simple check for demonstration
        if (!val.match(/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{1,2},\s\d{4}$/)) {
            setError("Invalid format.");
        } else {
             setError("");
        }
    }

    return (
        <div className="space-y-2 w-full">
            <label className="text-gray-300">Enter a date (e.g., Jun 15, 2024)</label>
            <input
                type="text"
                value={date}
                onChange={handleChange}
                className={`w-full p-2 rounded bg-gray-900 border ${error ? 'border-red-500' : 'border-gray-600'} text-white`}
            />
            <p className="text-red-500 text-sm h-5">{error || ' '}</p>
        </div>
    );
};

const ConstrainedInput = () => {
    const [date, setDate] = useState('2024-06-15');
     return (
        <div className="space-y-2 w-full">
            <label className="text-gray-300">Select a date</label>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-2 rounded bg-gray-900 border border-gray-600 text-white"
            />
            <p className="text-green-500 text-sm h-5">Impossible to select an invalid date.</p>
        </div>
    );
};

export const ConstraintsVisual: React.FC = () => {
    const [isConstrained, setIsConstrained] = useState(false);

    return (
        <div className="w-full max-w-sm h-72 flex flex-col items-center justify-center p-4">
            <div className="w-full h-48 flex flex-col justify-center items-center p-8 border-2 border-dashed border-gray-700 rounded-lg">
                {isConstrained ? <ConstrainedInput /> : <UnconstrainedInput />}
            </div>
             <div className="mt-4 flex items-center space-x-4">
                <span className={`text-sm ${!isConstrained ? 'text-white' : 'text-gray-500'}`}>Unconstrained</span>
                <button
                    onClick={() => setIsConstrained(!isConstrained)}
                    className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors bg-gray-600"
                    aria-label="Toggle input constraint"
                >
                    <span
                        className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${isConstrained ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                </button>
                <span className={`text-sm ${isConstrained ? 'text-white' : 'text-gray-500'}`}>Constrained</span>
            </div>
        </div>
    );
};