import React, { useState, useEffect } from 'react';

const MAX_TIME = 30;

export const ParkinsonsLawVisual: React.FC = () => {
    const [showTimer, setShowTimer] = useState(false);
    const [timeLeft, setTimeLeft] = useState(MAX_TIME);

    useEffect(() => {
        let interval: number | null = null;
        if (showTimer) {
            setTimeLeft(MAX_TIME);
            interval = window.setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        if (interval) clearInterval(interval);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else {
             setTimeLeft(MAX_TIME);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [showTimer]);

    return (
        <div className="w-full max-w-md h-72 flex flex-col items-center justify-center p-4">
            <div className="w-full h-48 flex flex-col justify-center items-center p-8 border-2 border-dashed border-gray-700 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-300">Quick Survey</h3>
                <div className="w-full my-2">
                    <label className="text-sm text-gray-400">Your favorite color:</label>
                    <input type="text" className="w-full p-2 mt-1 rounded bg-gray-900 border border-gray-600 text-white" />
                </div>
                <div className={`h-6 transition-opacity duration-300 ${showTimer ? 'opacity-100' : 'opacity-0'}`}>
                    {showTimer && (
                        <p className={`font-mono text-lg ${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-yellow-400'}`}>
                            {timeLeft}s remaining
                        </p>
                    )}
                </div>
            </div>
             <button
                onClick={() => setShowTimer(!showTimer)}
                className="mt-4 px-4 py-2 bg-gray-700 hover:bg-cyan-600 text-white rounded-lg transition-colors"
            >
                {showTimer ? 'Remove Time Limit' : 'Add Time Limit'}
            </button>
        </div>
    );
};
