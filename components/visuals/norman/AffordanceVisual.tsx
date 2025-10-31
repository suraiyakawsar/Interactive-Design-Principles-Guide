import React, { useState } from 'react';

const BadButton = () => <p className="text-cyan-400 underline cursor-pointer">Click me</p>;

const GoodButton = () => (
    <button className="px-6 py-2 bg-cyan-600 text-white rounded-lg shadow-md hover:bg-cyan-500 active:shadow-inner active:bg-cyan-700 transform hover:-translate-y-0.5 transition-all">
        Click me
    </button>
);

export const AffordanceVisual: React.FC = () => {
    const [showGood, setShowGood] = useState(false);

    return (
        <div className="w-full max-w-sm h-72 flex flex-col items-center justify-center p-4">
            <div className="w-full h-48 flex flex-col justify-center items-center p-8 border-2 border-dashed border-gray-700 rounded-lg">
                <div className="h-12 flex items-center">
                    {showGood ? <GoodButton /> : <BadButton />}
                </div>
            </div>
             <div className="mt-4 flex items-center space-x-4">
                <span className={`text-sm ${!showGood ? 'text-white' : 'text-gray-500'}`}>Poor Affordance</span>
                <button
                    onClick={() => setShowGood(!showGood)}
                    className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors bg-gray-600"
                    aria-label="Toggle affordance example"
                >
                    <span
                        className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${showGood ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                </button>
                <span className={`text-sm ${showGood ? 'text-white' : 'text-gray-500'}`}>Good Affordance</span>
            </div>
        </div>
    );
};