
import React, { useState } from 'react';

export const ContrastVisual: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(true);

  return (
    <div className="w-full max-w-md h-72 flex flex-col items-center justify-between p-4">
      <div className="w-full h-64 flex justify-around items-center p-4 border-2 border-dashed border-gray-700 rounded-lg">
        {/* Size Contrast */}
        <div className={`flex items-center justify-center gap-2 transition-all duration-300 ${isHighContrast ? 'opacity-100' : 'opacity-50'}`}>
          <div className="w-8 h-8 rounded-full bg-gray-600"></div>
          <div className={`w-16 h-16 rounded-full ${isHighContrast ? 'bg-cyan-500' : 'bg-cyan-800'}`}></div>
          <div className="w-8 h-8 rounded-full bg-gray-600"></div>
        </div>
        {/* Color Contrast */}
        <div className="flex items-center justify-center">
            <div className={`p-4 rounded-lg ${isHighContrast ? 'bg-gray-800' : 'bg-gray-600'} transition-colors duration-300`}>
                <p className={`text-lg font-bold ${isHighContrast ? 'text-cyan-400' : 'text-gray-400'} transition-colors duration-300`}>
                    Readable Text
                </p>
            </div>
        </div>
      </div>
      <button
        onClick={() => setIsHighContrast(!isHighContrast)}
        className="mt-4 px-4 py-2 bg-gray-700 hover:bg-cyan-600 text-white rounded-lg transition-colors"
        aria-live="polite"
      >
        Toggle to {isHighContrast ? 'Low' : 'High'} Contrast
      </button>
    </div>
  );
};
