import React, { useState } from 'react';

const FormField = ({ label, isGrouped }: { label: string, isGrouped: boolean }) => (
  <div className={`transition-all duration-500 ${isGrouped ? 'mb-6' : 'mb-3'}`}>
    <label className="block text-gray-400 text-sm mb-1">{label}</label>
    <input type="text" className="w-full p-2 bg-gray-900 border border-gray-600 rounded" />
  </div>
);

export const ProximityVisual: React.FC = () => {
  const [isGrouped, setIsGrouped] = useState(false);

  return (
    <div className="w-full max-w-sm h-80 flex flex-col items-center justify-between p-4">
      <div className="w-full h-72 flex flex-col justify-center items-center p-6 border-2 border-dashed border-gray-700 rounded-lg">
        <div className="w-full">
          <FormField label="First Name" isGrouped={isGrouped} />
          <FormField label="Last Name" isGrouped={isGrouped} />
          <FormField label="Email Address" isGrouped={isGrouped} />
        </div>
      </div>
      <button
        onClick={() => setIsGrouped(!isGrouped)}
        className="mt-4 px-4 py-2 bg-gray-700 hover:bg-cyan-600 text-white rounded-lg transition-colors"
      >
        {isGrouped ? 'Remove Proximity' : 'Apply Proximity'}
      </button>
    </div>
  );
};