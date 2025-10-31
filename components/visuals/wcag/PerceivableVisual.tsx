import React, { useState } from 'react';

const goodAlt = "A golden retriever puppy sits in a field of yellow flowers, looking up with a happy expression.";
const badAlt = "IMG_0451.jpg";

export const PerceivableVisual: React.FC = () => {
    const [isGoodExample, setIsGoodExample] = useState(true);
    const [showScreenReader, setShowScreenReader] = useState(false);

    const altText = isGoodExample ? goodAlt : badAlt;

    return (
        <div className="w-full max-w-md h-96 flex flex-col items-center justify-center p-4">
            <div className="w-full h-72 flex flex-col justify-center items-center p-4 border-2 border-dashed border-gray-700 rounded-lg relative">
                <img 
                    src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=462&auto=format&fit=crop" 
                    alt={altText}
                    className="w-48 h-48 object-cover rounded-lg"
                />
                <div 
                    className={`absolute inset-0 bg-gray-900/90 p-4 flex flex-col justify-center items-center text-center transition-opacity duration-300 ${showScreenReader ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                    <p className="text-sm text-gray-400 mb-2">Screen reader output:</p>
                    <p className="font-mono text-lg bg-black p-3 rounded text-cyan-400">
                        {`"Image: ${altText}"`}
                    </p>
                </div>
            </div>
            <div className="mt-4 flex flex-col items-center gap-2">
                <div className="flex items-center space-x-4">
                    <span className={`text-sm ${!isGoodExample ? 'text-white' : 'text-gray-500'}`}>Bad Alt Text</span>
                    <button
                        onClick={() => setIsGoodExample(!isGoodExample)}
                        className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors bg-gray-600"
                    >
                        <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${isGoodExample ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                    <span className={`text-sm ${isGoodExample ? 'text-white' : 'text-gray-500'}`}>Good Alt Text</span>
                </div>
                <button
                    onClick={() => setShowScreenReader(!showScreenReader)}
                    className="px-4 py-1 bg-gray-700 hover:bg-cyan-600 text-white rounded-lg transition-colors text-sm"
                >
                    {showScreenReader ? 'Hide Simulation' : 'Simulate Screen Reader'}
                </button>
            </div>
        </div>
    );
};