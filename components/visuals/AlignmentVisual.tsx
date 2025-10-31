
import React, { useState } from 'react';

const AlignedGroup = ({ isAligned, color, alignment }: { isAligned: boolean, color: string, alignment: 'left' | 'center' }) => {
    const baseClasses = `h-8 bg-${color}-500 rounded transition-transform duration-500 ease-in-out`;
    
    const alignmentClasses = alignment === 'center' ? 'flex flex-col items-center space-y-3' : 'space-y-3';
    
    return (
        <div className={`w-1/3 ${alignmentClasses}`}>
            <div className={`${baseClasses} w-24 ${!isAligned && alignment === 'left' ? 'transform translate-x-2' : ''} ${!isAligned && alignment === 'center' ? 'transform -translate-x-1' : ''}`}></div>
            <div className={`${baseClasses} w-32 ${!isAligned && alignment === 'left' ? 'transform -translate-x-1' : ''} ${!isAligned && alignment === 'center' ? 'transform translate-x-2' : ''}`}></div>
            <div className={`${baseClasses} w-20 ${!isAligned && alignment === 'left' ? 'transform translate-x-1' : ''} ${!isAligned && alignment === 'center' ? 'transform -translate-x-2' : ''}`}></div>
        </div>
    );
}

export const AlignmentVisual: React.FC = () => {
  const [isAligned, setIsAligned] = useState(false);

  return (
    <div className="w-full max-w-lg h-72 flex flex-col justify-between items-center p-4">
      <div className="w-full h-64 flex justify-around items-center p-4 border-2 border-dashed border-gray-700 rounded-lg relative">
        {/* Guides */}
        <div className={`absolute left-16 top-4 bottom-4 w-px bg-red-500/50 transition-opacity duration-300 ${isAligned ? 'opacity-100' : 'opacity-0'}`}></div>
        <div className={`absolute left-1/2 top-4 bottom-4 w-px -ml-[1px] bg-red-500/50 transition-opacity duration-300 ${isAligned ? 'opacity-100' : 'opacity-0'}`}></div>

        <AlignedGroup isAligned={isAligned} color="cyan" alignment="left" />
        <AlignedGroup isAligned={isAligned} color="blue" alignment="center" />
      </div>
      <button
        onClick={() => setIsAligned(!isAligned)}
        className="mt-4 px-4 py-2 bg-gray-700 hover:bg-cyan-600 text-white rounded-lg transition-colors"
      >
        {isAligned ? 'Misalign' : 'Align Elements'}
      </button>
    </div>
  );
};
