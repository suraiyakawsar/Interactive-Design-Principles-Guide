import React, { useState } from 'react';

const ActionButton = ({ icon, text, color }: { icon: string, text: string, color: string }) => (
    <button className={`flex items-center gap-2 px-3 py-1 rounded text-sm text-white bg-${color}-600 hover:bg-${color}-500`}>
        {icon} {text}
    </button>
);

export const VisibilityVisual: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="w-full max-w-sm h-72 flex flex-col items-center justify-center p-4">
            <div className="w-full h-56 flex flex-col justify-between p-4 border-2 border-dashed border-gray-700 rounded-lg bg-gray-800">
                <div>
                    <h3 className="text-lg font-bold text-gray-200">Document.pdf</h3>
                    <p className="text-sm text-gray-400">Last updated: 3 hours ago</p>
                </div>
                <div className="flex items-center justify-end gap-2">
                    {isVisible ? (
                        <>
                            <ActionButton icon="✏️" text="Edit" color="cyan" />
                            <ActionButton icon="🗑️" text="Delete" color="red" />
                        </>
                    ) : (
                        <button className="px-3 py-1 rounded text-white bg-gray-600 hover:bg-gray-500">⋮</button>
                    )}
                </div>
            </div>
             <div className="mt-4 flex items-center space-x-4">
                <span className={`text-sm ${!isVisible ? 'text-white' : 'text-gray-500'}`}>Hidden</span>
                <button
                    onClick={() => setIsVisible(!isVisible)}
                    className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors bg-gray-600"
                    aria-label="Toggle action visibility"
                >
                    <span
                        className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${isVisible ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                </button>
                <span className={`text-sm ${isVisible ? 'text-white' : 'text-gray-500'}`}>Visible</span>
            </div>
        </div>
    );
};