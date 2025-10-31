import React, { useState } from 'react';

const InfoLine = ({ text, isGrouped, group }: { text: string, isGrouped: boolean, group: 'name' | 'address' | 'contact' }) => {
  
  const groupedMargins = {
    name: 'mb-4',
    address: 'mb-1',
    contact: 'mb-1'
  };

  const scatteredMargin = 'mb-3';

  const marginClass = isGrouped ? groupedMargins[group] : scatteredMargin;

  return <p className={`transition-all duration-500 ease-in-out ${marginClass}`}>{text}</p>;
};

export const ProximityVisual: React.FC = () => {
  const [isGrouped, setIsGrouped] = useState(false);

  return (
    <div className="w-full max-w-md h-80 flex flex-col items-center justify-between p-4">
      <div className="w-full h-72 flex flex-col justify-center items-center p-8 border-2 border-dashed border-gray-700 rounded-lg">
        <div className="text-gray-400 text-left w-full max-w-xs">
            <InfoLine text="John Smith" isGrouped={isGrouped} group="name" />
            <InfoLine text="123 Design St." isGrouped={isGrouped} group="address" />
            <InfoLine text="Suite 101" isGrouped={isGrouped} group="address" />
            <InfoLine text="Visual City, 98765" isGrouped={isGrouped} group="address" />
            <InfoLine text="(555) 987-6543" isGrouped={isGrouped} group="contact" />
            <InfoLine text="john.smith@example.com" isGrouped={isGrouped} group="contact" />
        </div>
      </div>
      <button
        onClick={() => setIsGrouped(!isGrouped)}
        className="mt-4 px-4 py-2 bg-gray-700 hover:bg-cyan-600 text-white rounded-lg transition-colors"
      >
        {isGrouped ? 'Ungroup Items' : 'Group Related Items'}
      </button>
    </div>
  );
};