import React, { useState } from 'react';

const CardText = ({ text, isAligned, initialClasses }: { text: string, isAligned: boolean, initialClasses: string }) => {
  const base = "transition-all duration-500 ease-in-out";
  const aligned = "left-6"; // Align to a common left margin
  return (
    <p className={`${base} ${isAligned ? aligned : initialClasses}`}>
      {text}
    </p>
  );
};

export const AlignmentVisual: React.FC = () => {
  const [isAligned, setIsAligned] = useState(false);

  return (
    <div className="w-full max-w-md h-72 flex flex-col justify-between items-center p-4">
      <div className="w-full h-64 flex justify-center items-center p-4 border-2 border-dashed border-gray-700 rounded-lg">
        <div className="relative w-80 h-48 bg-gray-800 rounded-lg shadow-lg text-gray-300 flex flex-col justify-center">
          {/* Alignment Guide */}
          <div className={`absolute top-4 bottom-4 left-6 w-px bg-red-500/70 transition-opacity duration-300 ${isAligned ? 'opacity-100' : 'opacity-0'}`}></div>

          <div className="absolute top-6">
            <CardText text="Jane Doe" isAligned={isAligned} initialClasses="left-6 text-xl font-bold" />
          </div>
          <div className="absolute top-14">
            <CardText text="UX Designer" isAligned={isAligned} initialClasses="left-16 text-cyan-400" />
          </div>
          <div className="absolute bottom-10">
             <CardText text="555-123-4567" isAligned={isAligned} initialClasses="left-4 text-sm" />
          </div>
           <div className="absolute bottom-4">
             <CardText text="jane.doe@email.com" isAligned={isAligned} initialClasses="left-20 text-sm" />
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsAligned(!isAligned)}
        className="mt-4 px-4 py-2 bg-gray-700 hover:bg-cyan-600 text-white rounded-lg transition-colors"
      >
        {isAligned ? 'Disrupt Alignment' : 'Create Alignment'}
      </button>
    </div>
  );
};