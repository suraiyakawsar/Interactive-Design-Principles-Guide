import React, { useState } from 'react';

const fontSizes = [12, 14, 16, 20, 24]; // in px

export const UserControlVisual: React.FC = () => {
    const [sizeIndex, setSizeIndex] = useState(2); // Start with 16px

    const increaseSize = () => setSizeIndex(prev => Math.min(prev + 1, fontSizes.length - 1));
    const decreaseSize = () => setSizeIndex(prev => Math.max(prev - 1, 0));

    const currentSize = fontSizes[sizeIndex];

    return (
        <div className="w-full max-w-lg h-80 flex flex-col items-center justify-center p-4">
            <div className="w-full h-64 flex flex-col p-4 border-2 border-dashed border-gray-700 rounded-lg">
                <div className="flex items-center justify-end gap-2 mb-4">
                    <span className="text-sm text-gray-400">Font Size:</span>
                    <button 
                        onClick={decreaseSize}
                        disabled={sizeIndex === 0}
                        className="w-8 h-8 bg-gray-700 text-white rounded disabled:opacity-50"
                        aria-label="Decrease font size"
                    >
                        -
                    </button>
                    <button 
                        onClick={increaseSize} 
                        disabled={sizeIndex === fontSizes.length - 1}
                        className="w-8 h-8 bg-gray-700 text-white rounded disabled:opacity-50"
                        aria-label="Increase font size"
                    >
                        +
                    </button>
                </div>
                <div 
                    className="text-gray-300 overflow-y-auto flex-grow transition-all duration-300"
                    style={{ fontSize: `${currentSize}px`, lineHeight: `${currentSize * 1.6}px` }}
                >
                    <p>
                        Giving users control over aspects like font size, color contrast, or animation speed allows them to tailor the experience to their specific needs and preferences. This is a fundamental aspect of inclusive design, as it acknowledges that there is no single "one-size-fits-all" solution for usability. By providing these options, you empower users and create a more comfortable and accessible environment for a wider range of people.
                    </p>
                </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">Use the controls to adjust the text size.</p>
        </div>
    );
};