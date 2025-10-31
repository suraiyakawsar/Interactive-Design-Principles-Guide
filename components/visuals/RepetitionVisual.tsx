
import React, { useState } from 'react';

export const RepetitionVisual: React.FC = () => {
  const [breakIndex, setBreakIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-md h-72 flex flex-col items-center justify-between p-4">
      <div className="w-full h-64 flex items-center justify-center p-4 border-2 border-dashed border-gray-700 rounded-lg">
        <div className="grid grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <button
              key={i}
              aria-label={`Element ${i + 1}`}
              onClick={() => setBreakIndex(breakIndex === i ? null : i)}
              className="flex flex-col items-center space-y-2 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg"
            >
              <div
                className={`w-10 h-10 rounded-full transition-all duration-300 ${
                  breakIndex === i ? 'bg-red-500 scale-110' : 'bg-cyan-500 group-hover:bg-cyan-400'
                }`}
              ></div>
              <div
                className={`w-8 h-2 rounded-full transition-colors duration-300 ${
                  breakIndex === i ? 'bg-red-500' : 'bg-blue-500'
                }`}
              ></div>
            </button>
          ))}
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-500">Click an element to break the repetition.</p>
    </div>
  );
};
