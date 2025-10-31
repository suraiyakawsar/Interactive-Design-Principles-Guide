import React, { useState } from 'react';

export const ClosureVisual: React.FC = () => {
  const [isClosed, setIsClosed] = useState(false);

  return (
    <div className="w-full max-w-md h-72 flex flex-col items-center justify-between p-4">
      <div className="w-full h-64 flex justify-center items-center p-4 border-2 border-dashed border-gray-700 rounded-lg">
        <svg width="150" height="150" viewBox="0 0 100 100">
          <defs>
            <path id="circle-path" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"/>
          </defs>
          <g fill="none" strokeWidth="10" strokeLinecap="round">
            <use 
              href="#circle-path" 
              stroke="currentColor" 
              className="text-cyan-500" 
              strokeDasharray="20 5"
              strokeDashoffset="0"
            />
            {/* The closing piece */}
            <use 
              href="#circle-path" 
              stroke="currentColor" 
              className="text-yellow-400" 
              strokeDasharray="0 20 5 225" // Hide all but the gaps
              strokeDashoffset="0"
              style={{ transition: 'opacity 0.5s ease-in-out', opacity: isClosed ? 1 : 0 }}
            />
          </g>
        </svg>
      </div>
      <button
        onClick={() => setIsClosed(!isClosed)}
        className="mt-4 px-4 py-2 bg-gray-700 hover:bg-cyan-600 text-white rounded-lg transition-colors"
      >
        {isClosed ? 'Show Gaps' : 'Complete the Shape'}
      </button>
    </div>
  );
};