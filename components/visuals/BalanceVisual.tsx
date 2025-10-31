
import React, { useState } from 'react';

export const BalanceVisual: React.FC = () => {
    const [isBalanced, setIsBalanced] = useState(false);

    return (
        <div className="w-full max-w-md h-72 flex flex-col justify-between items-center p-4">
            <div className="w-full h-64 flex justify-center items-center p-4 border-2 border-dashed border-gray-700 rounded-lg relative overflow-hidden">
                <div 
                    className={`absolute w-16 h-24 bg-blue-500 rounded transition-transform duration-500 ease-in-out ${isBalanced ? 'transform -translate-x-20' : 'transform translate-x-10 -translate-y-10 rotate-12'}`}
                ></div>
                <div 
                    className={`absolute w-8 h-12 bg-cyan-500 rounded transition-transform duration-500 ease-in-out ${isBalanced ? 'transform translate-x-20' : 'transform -translate-x-16 translate-y-16 -rotate-12'}`}
                ></div>
                <div 
                    className={`absolute w-10 h-10 bg-cyan-500 rounded-full transition-transform duration-500 ease-in-out ${isBalanced ? 'transform translate-x-24 -translate-y-12' : 'transform translate-y-10'}`}
                ></div>

                {/* Fulcrum */}
                <div className="absolute bottom-0 w-full h-1 bg-gray-600"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[15px] border-b-gray-600"></div>
            </div>
            <button
                onClick={() => setIsBalanced(!isBalanced)}
                className="mt-4 px-4 py-2 bg-gray-700 hover:bg-cyan-600 text-white rounded-lg transition-colors"
            >
                {isBalanced ? 'Unbalance' : 'Achieve Balance'}
            </button>
        </div>
    );
};
