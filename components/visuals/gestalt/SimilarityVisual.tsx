import React, { useState } from 'react';

const Shape = ({ type, isSimilar }: { type: 'circle' | 'square', isSimilar: boolean }) => {
  const isSquare = type === 'square';
  const baseClasses = "w-10 h-10 transition-colors duration-300";
  const shapeClass = isSquare ? "rounded-md" : "rounded-full";
  const colorClass = isSimilar && isSquare ? "bg-cyan-500" : "bg-gray-700";
  return <div className={`${baseClasses} ${shapeClass} ${colorClass}`}></div>;
};

export const SimilarityVisual: React.FC = () => {
  const [isSimilar, setIsSimilar] = useState(false);
  const shapes = ['circle', 'square', 'square', 'circle', 'square', 'circle', 'circle', 'square', 'square'];

  return (
    <div className="w-full max-w-md h-72 flex flex-col items-center justify-between p-4">
      <div className="w-full h-64 flex items-center justify-center p-4 border-2 border-dashed border-gray-700 rounded-lg">
        <div className="grid grid-cols-3 gap-4">
          {shapes.map((type, i) => (
            <Shape key={i} type={type as 'circle' | 'square'} isSimilar={isSimilar} />
          ))}
        </div>
      </div>
      <button
        onClick={() => setIsSimilar(!isSimilar)}
        className="mt-4 px-4 py-2 bg-gray-700 hover:bg-cyan-600 text-white rounded-lg transition-colors"
      >
        {isSimilar ? 'Remove Similarity' : 'Group by Similarity'}
      </button>
    </div>
  );
};