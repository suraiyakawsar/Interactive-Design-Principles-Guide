import React, { useState } from 'react';

const longString = "A84B1J0D9K3L";
const chunkedString = "A84B - 1J0D - 9K3L";

export const MillersLawVisual: React.FC = () => {
    const [isChunked, setIsChunked] = useState(false);

    return (
        <div className="w-full max-w-md h-72 flex flex-col items-center justify-center p-4">
            <div className="w-full h-48 flex flex-col justify-center items-center p-8 border-2 border-dashed border-gray-700 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-300 mb-2">Your Confirmation Code:</h3>
                <div className="bg-gray-900 p-4 rounded-lg">
                    <p className="text-3xl font-mono tracking-widest text-cyan-400">
                        {isChunked ? chunkedString : longString}
                    </p>
                </div>
                <p className="text-sm text-gray-500 mt-4 h-5">
                    {isChunked ? 'Much easier to read and remember.' : 'Hard to scan and recall.'}
                </p>
            </div>
            <button
                onClick={() => setIsChunked(!isChunked)}
                className="mt-4 px-4 py-2 bg-gray-700 hover:bg-cyan-600 text-white rounded-lg transition-colors"
            >
                {isChunked ? 'Remove Chunking' : 'Apply Chunking'}
            </button>
        </div>
    );
};
