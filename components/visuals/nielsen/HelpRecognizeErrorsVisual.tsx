import React, { useState } from 'react';

const ErrorMessage = ({ type, message }: { type: 'bad' | 'good', message: string }) => {
    const isBad = type === 'bad';
    return (
        <div className={`p-3 rounded-lg flex items-start space-x-3 ${isBad ? 'bg-red-900/50' : 'bg-yellow-900/50'}`}>
            <span className="text-xl">{isBad ? '🚫' : '💡'}</span>
            <div>
                <h4 className={`font-bold ${isBad ? 'text-red-400' : 'text-yellow-400'}`}>{isBad ? 'Error' : 'Suggestion'}</h4>
                <p className={`text-sm ${isBad ? 'text-red-300' : 'text-yellow-300'}`}>{message}</p>
            </div>
        </div>
    );
}

export const HelpRecognizeErrorsVisual: React.FC = () => {
    const [errorType, setErrorType] = useState<'none' | 'bad' | 'good'>('none');

    return (
        <div className="w-full max-w-md h-80 lg:h-72 flex flex-col items-center justify-between p-4">
            <div className="w-full h-56 flex flex-col justify-center items-center p-4 border-2 border-dashed border-gray-700 rounded-lg space-y-4">
                {errorType === 'none' && <p className="text-gray-500">Click a button to simulate an error.</p>}
                {errorType === 'bad' && <ErrorMessage type="bad" message="Operation failed. (Code: #4815)" />}
                {errorType === 'good' && <ErrorMessage type="good" message="Your session has expired. Please log in again to continue." />}
            </div>
            <div className="flex items-center gap-4 mt-4">
                 <button
                    onClick={() => setErrorType('bad')}
                    className="px-4 py-2 bg-gray-700 hover:bg-red-600 text-white rounded-lg transition-colors"
                >
                    Show Bad Error
                </button>
                 <button
                    onClick={() => setErrorType('good')}
                    className="px-4 py-2 bg-gray-700 hover:bg-yellow-600 text-white rounded-lg transition-colors"
                >
                    Show Good Error
                </button>
            </div>
        </div>
    );
};