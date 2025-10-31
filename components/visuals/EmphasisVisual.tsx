
import React, { useState } from 'react';

export const EmphasisVisual: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(5);

  return (
    <div className="w-full max-w-md h-72 flex flex-col items-center justify-between p-4">
      <div className="w-full h-64 flex items-center justify-center p-4 border-2 border-dashed border-gray-700 rounded-lg">
        <div className="grid grid-cols-4 gap-4">
          {[...Array(12)].map((_, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndex(i)}
              aria-label={`Emphasize item ${i + 1}`}
              className={`w-12 h-12 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-400 ${
                i === selectedIndex
                  ? 'bg-cyan-400 scale-125 shadow-lg shadow-cyan-500/50'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            ></button>
          ))}
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-500">Click a circle to shift the emphasis.</p>
    </div>
  );
};
