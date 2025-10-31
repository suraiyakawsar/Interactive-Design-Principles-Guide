
import React, { useState } from 'react';

const ContentBlock = ({ isSpacious }: { isSpacious: boolean }) => (
  <div className={`w-1/2 h-full border border-gray-800 flex flex-col justify-start transition-all duration-500 ${isSpacious ? 'p-6' : 'p-1'}`}>
    <p className={`font-bold leading-tight transition-all duration-500 ${isSpacious ? 'text-sm text-cyan-400 mb-4' : 'text-sm text-gray-400'}`}>
      {isSpacious ? 'Spacious' : 'Crowded'} Title
    </p>
    <p className={`leading-tight transition-colors duration-500 ${isSpacious ? 'text-xs text-gray-400' : 'text-xs text-gray-500'}`}>
      {isSpacious 
        ? 'With adequate white space, the content becomes more legible and the design feels more open and organized.'
        : 'This text is hard to read because there is not enough white space around the elements, making it feel cluttered.'}
    </p>
  </div>
);

export const WhiteSpaceVisual: React.FC = () => {
    const [isLeftSpacious, setIsLeftSpacious] = useState(false);

    return (
        <div className="w-full max-w-md h-72 flex flex-col justify-between items-center p-4">
            <div className="w-full h-64 flex justify-around items-center border-2 border-dashed border-gray-700 rounded-lg">
                <ContentBlock isSpacious={isLeftSpacious} />
                <ContentBlock isSpacious={!isLeftSpacious} />
            </div>
            <button
                onClick={() => setIsLeftSpacious(!isLeftSpacious)}
                className="mt-4 px-4 py-2 bg-gray-700 hover:bg-cyan-600 text-white rounded-lg transition-colors"
            >
                Toggle Space
            </button>
        </div>
    );
};
