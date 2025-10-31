import React, { useState } from 'react';

const ToggleSwitch = ({ label, showLabel }: { label: string, showLabel: boolean }) => (
    <div className="flex items-center justify-between w-full">
        <span className={`transition-opacity duration-300 ${showLabel ? 'opacity-100' : 'opacity-0'}`}>{label}</span>
        <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
            <input type="checkbox" name="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
            <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-700 cursor-pointer"></label>
        </div>
    </div>
);

// Basic CSS for the toggle switch since Tailwind doesn't have a built-in one
const ToggleStyles = () => (
    <style>{`
        .toggle-checkbox:checked { right: 0; border-color: #0891B2; }
        .toggle-checkbox:checked + .toggle-label { background-color: #0891B2; }
    `}</style>
);


export const RecognitionRecallVisual: React.FC = () => {
    const [showLabels, setShowLabels] = useState(true);

    return (
        <>
        <ToggleStyles />
        <div className="w-full max-w-md h-72 flex flex-col items-center justify-between p-4">
            <div className="w-full h-64 flex flex-col justify-center items-center p-8 border-2 border-dashed border-gray-700 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-300">Notifications</h3>
                <div className="space-y-4 w-full text-gray-400">
                    <ToggleSwitch label="Push Notifications" showLabel={showLabels} />
                    <ToggleSwitch label="Email Updates" showLabel={showLabels} />
                    <ToggleSwitch label="SMS Alerts" showLabel={showLabels} />
                </div>
            </div>
            <button
                onClick={() => setShowLabels(!showLabels)}
                className="mt-4 px-4 py-2 bg-gray-700 hover:bg-cyan-600 text-white rounded-lg transition-colors"
            >
                {showLabels ? 'Hide Labels (Recall)' : 'Show Labels (Recognition)'}
            </button>
        </div>
        </>
    );
};