
import React, { useState } from 'react';

export const HierarchyVisual: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="w-full max-w-md h-72 flex flex-col justify-between items-center p-4">
      <div className="w-full h-64 flex flex-col justify-center items-start p-8 border-2 border-dashed border-gray-700 rounded-lg space-y-4">
        <div className="text-4xl font-bold text-cyan-400">Main Title</div>
        <div className="text-2xl font-semibold text-gray-300 ml-4">Subtitle</div>
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            showDetails ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="text-base text-gray-500 ml-8 pt-2">Body text providing some details.</div>
          <div className="text-base text-gray-500 ml-8">More body text to show structure.</div>
        </div>
      </div>
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="mt-4 px-4 py-2 bg-gray-700 hover:bg-cyan-600 text-white rounded-lg transition-colors"
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
    </div>
  );
};
