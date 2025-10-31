import React, { useState } from 'react';

export const ContrastVisual: React.FC = () => {
  const [hasContrast, setHasContrast] = useState(false);

  const headingClasses = `font-sans transition-all duration-300 ${
    hasContrast
      ? 'text-3xl font-extrabold text-cyan-400'
      : 'text-xl font-semibold text-gray-500'
  }`;

  const textClasses = `transition-colors duration-300 ${
    hasContrast ? 'text-gray-300' : 'text-gray-600'
  }`;

  return (
    <div className="w-full max-w-md h-72 flex flex-col items-center justify-between p-4">
      <div className="w-full h-64 flex flex-col justify-center p-8 border-2 border-dashed border-gray-700 rounded-lg">
        <h3 className={headingClasses}>Article Title</h3>
        <p className={`mt-2 ${textClasses}`}>
          This is some body text. With good contrast, the hierarchy is clear and
          the content is easy to read. Without it, everything blends together.
        </p>
         <p className={`mt-4 text-sm ${textClasses}`}>
          Another paragraph to demonstrate how readability is affected by the contrast between different text elements.
        </p>
      </div>
      <button
        onClick={() => setHasContrast(!hasContrast)}
        className="mt-4 px-4 py-2 bg-gray-700 hover:bg-cyan-600 text-white rounded-lg transition-colors"
        aria-live="polite"
      >
        {hasContrast ? 'Remove Contrast' : 'Improve Contrast'}
      </button>
    </div>
  );
};