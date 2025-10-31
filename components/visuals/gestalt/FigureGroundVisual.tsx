import React, { useState } from 'react';

export const FigureGroundVisual: React.FC = () => {
  const [isVaseFigure, setIsVaseFigure] = useState(true);

  return (
    <div className="w-full max-w-md h-72 flex flex-col items-center justify-between p-4">
      <div className="w-full h-64 flex justify-center items-center p-4 border-2 border-dashed border-gray-700 rounded-lg">
        <svg width="150" height="200" viewBox="0 0 150 200">
          {/* Background/Faces */}
          <rect 
            width="150" 
            height="200" 
            className={`transition-colors duration-500 ${isVaseFigure ? 'fill-gray-800' : 'fill-cyan-500'}`} 
          />
          {/* Vase */}
          <path 
            d="M50,0 C20,0 20,40 50,40 L50,160 C20,160 20,200 50,200 H100 C130,200 130,160 100,160 L100,40 C130,40 130,0 100,0 Z" 
            className={`transition-colors duration-500 ${isVaseFigure ? 'fill-cyan-500' : 'fill-gray-800'}`}
          />
        </svg>
      </div>
      <button
        onClick={() => setIsVaseFigure(!isVaseFigure)}
        className="mt-4 px-4 py-2 bg-gray-700 hover:bg-cyan-600 text-white rounded-lg transition-colors"
      >
        {isVaseFigure ? 'See The Faces' : 'See The Vase'}
      </button>
    </div>
  );
};