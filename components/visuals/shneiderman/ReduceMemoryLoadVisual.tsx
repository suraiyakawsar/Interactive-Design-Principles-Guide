import React, { useState } from 'react';

const RecallView = () => {
    const [step, setStep] = useState(1);
    const code = "8C3-J4E";
    return (
        <div className="text-center">
            {step === 1 && (
                <>
                    <h3 className="text-lg font-semibold text-gray-300">Step 1: Memorize Your Code</h3>
                    <p className="my-4 text-3xl font-mono tracking-widest text-cyan-400 bg-gray-900 p-2 rounded">{code}</p>
                    <button onClick={() => setStep(2)} className="px-4 py-2 bg-cyan-600 text-white rounded">Got it</button>
                </>
            )}
             {step === 2 && (
                <>
                     <h3 className="text-lg font-semibold text-gray-300">Step 2: Enter the Code</h3>
                     <input type="text" placeholder="???" className="my-4 w-48 text-center p-2 rounded bg-gray-900 border border-gray-600 text-white text-2xl font-mono" />
                     <p className="text-sm text-red-400">You have to switch back and forth or remember it!</p>
                </>
            )}
        </div>
    );
}

const RecognitionView = () => (
    <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-300">Enter Your 2FA Code</h3>
        <p className="text-gray-400 mt-2">Your code is:</p>
        <p className="text-2xl font-mono tracking-widest text-cyan-400">8C3-J4E</p>
        <input type="text" defaultValue="8C3-J4E" className="my-4 w-48 text-center p-2 rounded bg-gray-900 border border-gray-600 text-white text-2xl font-mono" />
        <p className="text-sm text-green-400">The code is visible, so there's no memory load.</p>
    </div>
);


export const ReduceMemoryLoadVisual: React.FC = () => {
    const [isRecognition, setIsRecognition] = useState(false);

    return (
        <div className="w-full max-w-md h-80 flex flex-col items-center justify-center p-4">
            <div className="w-full h-64 flex flex-col justify-center items-center p-4 border-2 border-dashed border-gray-700 rounded-lg">
                {isRecognition ? <RecognitionView /> : <RecallView />}
            </div>
             <div className="mt-4 flex items-center space-x-4">
                <span className={`text-sm ${!isRecognition ? 'text-white' : 'text-gray-500'}`}>High Memory Load</span>
                <button
                    onClick={() => setIsRecognition(!isRecognition)}
                    className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors bg-gray-600"
                    aria-label="Toggle view"
                >
                    <span
                        className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${isRecognition ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                </button>
                <span className={`text-sm ${isRecognition ? 'text-white' : 'text-gray-500'}`}>Low Memory Load</span>
            </div>
        </div>
    );
};