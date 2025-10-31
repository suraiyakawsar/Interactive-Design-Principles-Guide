import React, { useState } from 'react';

const Card = ({ title, buttonText, buttonStyle, inconsistentStyle = {}, isHighlighted = false }: { title: string, buttonText: string, buttonStyle: string, inconsistentStyle?: React.CSSProperties, isHighlighted?: boolean }) => {
    const highlightClass = isHighlighted ? 'ring-2 ring-red-500' : '';
    return (
        <div className="bg-gray-800 p-4 rounded-lg w-full space-y-3">
            <h3 className="font-semibold text-gray-300">{title}</h3>
            <p className="text-sm text-gray-400">Some descriptive text about this item.</p>
            <button
                className={`${buttonStyle} ${highlightClass}`}
                style={inconsistentStyle}
            >
                {buttonText}
            </button>
        </div>
    );
}

export const ConsistencyStandardsVisual: React.FC = () => {
    const [highlight, setHighlight] = useState(false);
    
    const consistentButtonStyle = "px-3 py-1 text-sm bg-cyan-600 text-white rounded";
    
    return (
        <div className="w-full max-w-lg h-80 lg:h-72 flex flex-col items-center justify-between p-4">
            <div className="w-full h-64 flex flex-col lg:flex-row justify-around items-center gap-4">
                <div className="w-full lg:w-1/2 space-y-2">
                    <p className="text-center text-sm font-bold text-green-400">Consistent</p>
                    <Card title="Profile" buttonText="View Details" buttonStyle={consistentButtonStyle} />
                    <Card title="Settings" buttonText="View Details" buttonStyle={consistentButtonStyle} />
                </div>
                <div className="w-full lg:w-1/2 space-y-2">
                    <p className="text-center text-sm font-bold text-red-400">Inconsistent</p>
                    <Card title="Profile" buttonText="View Details" buttonStyle={consistentButtonStyle} />
                    <Card title="Settings" buttonText="Go" buttonStyle="px-4 py-1 text-xs bg-blue-700 text-white rounded-full" isHighlighted={highlight} />
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