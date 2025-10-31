import React, { useState } from 'react';

const Form = ({ isConsistent, highlight }: { isConsistent: boolean, highlight: boolean }) => {
    const consistentLabel = "text-sm text-gray-400 mb-1";
    const consistentInput = "w-full p-2 rounded bg-gray-900 border border-gray-600 text-white";
    const consistentButton = "w-full p-2 mt-3 bg-cyan-600 text-white rounded hover:bg-cyan-500";
    
    const inconsistentLabel = "text-xs text-blue-400 mb-2";
    const inconsistentInput = "w-full p-1 rounded-sm bg-gray-700 border-2 border-blue-400 text-white";
    const inconsistentButton = "w-auto px-6 py-1 mt-2 bg-green-500 text-black rounded-full text-lg font-serif";
    
    return (
        <div className="bg-gray-800 p-4 rounded-lg w-full space-y-3">
            <h3 className="font-semibold text-gray-300 mb-2">{isConsistent ? 'Login' : 'User Authentication'}</h3>
            <div>
                <label className={isConsistent ? consistentLabel : inconsistentLabel}>Username</label>
                <input type="text" className={isConsistent ? consistentInput : consistentInput} />
            </div>
             <div>
                <label className={`${isConsistent ? consistentLabel : inconsistentLabel} ${highlight && !isConsistent ? 'ring-2 ring-red-500' : ''}`}>Password</label>
                <input type="password" className={`${isConsistent ? consistentInput : 'w-full p-2 bg-gray-900 border border-gray-600 text-white'} ${highlight && !isConsistent ? 'ring-2 ring-red-500' : ''}`} />
            </div>
            <button className={`${isConsistent ? consistentButton : inconsistentButton} ${highlight && !isConsistent ? 'ring-2 ring-red-500' : ''}`}>{isConsistent ? 'Submit' : 'Go!'}</button>
        </div>
    );
}

export const ConsistencyVisual: React.FC = () => {
    const [highlight, setHighlight] = useState(false);
    
    return (
        <div className="w-full max-w-lg h-96 lg:h-80 flex flex-col items-center justify-between p-4">
            <div className="w-full h-full flex flex-col lg:flex-row justify-around items-center gap-4">
                <div className="w-full lg:w-1/2">
                    <p className="text-center text-sm font-bold text-green-400 mb-2">Consistent</p>
                    <Form isConsistent={true} highlight={highlight} />
                </div>
                <div className="w-full lg:w-1/2">
                    <p className="text-center text-sm font-bold text-red-400 mb-2">Inconsistent</p>
                    <Form isConsistent={false} highlight={highlight} />
                </div>
            </div>
            <button
                onClick={() => setHighlight(!highlight)}
                className="mt-4 px-4 py-2 bg-gray-700 hover:bg-cyan-600 text-white rounded-lg transition-colors"
            >
                {highlight ? 'Remove Highlight' : 'Highlight Inconsistencies'}
            </button>
        </div>
    );
};