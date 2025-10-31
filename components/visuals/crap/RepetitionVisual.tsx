import React, { useState } from 'react';

const Card = ({ title, buttonText, isUnified }: { title: string, buttonText: string, isUnified: boolean }) => {
  const unifiedCard = "bg-gray-800 border-gray-700";
  const unifiedButton = "bg-cyan-600 text-white text-sm";
  
  const initialStyles = [
    { card: "bg-blue-900/50 border-blue-700", button: "bg-yellow-500 text-black text-xs" },
    { card: "bg-gray-700 border-gray-600", button: "bg-green-500 text-white text-lg font-serif" },
    { card: "bg-purple-900/50 border-purple-700", button: "border-2 border-cyan-400 text-cyan-400 text-sm" },
  ];

  const style = isUnified ? { card: unifiedCard, button: unifiedButton } : initialStyles[parseInt(title.slice(-1)) - 1];

  return (
    <div className={`p-3 rounded-lg border flex flex-col items-start space-y-2 transition-all duration-500 ${style.card}`}>
      <h4 className="font-semibold text-gray-300">{title}</h4>
      <button className={`px-3 py-1 rounded-md transition-all duration-500 ${style.button}`}>{buttonText}</button>
    </div>
  );
};

export const RepetitionVisual: React.FC = () => {
  const [isUnified, setIsUnified] = useState(false);

  return (
    <div className="w-full max-w-md h-80 flex flex-col items-center justify-between p-4">
      <div className="w-full h-72 flex flex-col justify-center items-center p-4 border-2 border-dashed border-gray-700 rounded-lg space-y-2">
        <Card title="Item 1" buttonText="Go" isUnified={isUnified} />
        <Card title="Item 2" buttonText="Details" isUnified={isUnified} />
        <Card title="Item 3" buttonText="View" isUnified={isUnified} />
      </div>
      <button
        onClick={() => setIsUnified(!isUnified)}
        className="mt-4 px-4 py-2 bg-gray-700 hover:bg-cyan-600 text-white rounded-lg transition-colors"
      >
        {isUnified ? 'Remove Repetition' : 'Apply Repetition'}
      </button>
    </div>
  );
};