import React, { useState } from 'react';

const simpleMenu = ['Espresso', 'Latte', 'Cappuccino'];
const complexMenu = [
  'Espresso', 'Latte', 'Cappuccino', 'Americano', 'Macchiato', 'Mocha',
  'Flat White', 'Affogato', 'Cortado', 'Irish Coffee', 'Ristretto', 'Lungo'
];

const Menu = ({ items }: { items: string[] }) => (
  <div className="bg-gray-800 p-4 rounded-lg w-full">
    <h3 className="font-bold text-lg text-cyan-400 mb-2">Today's Coffees</h3>
    <ul className={`grid ${items.length > 3 ? 'grid-cols-2' : 'grid-cols-1'} gap-x-4 gap-y-2`}>
      {items.map(item => (
        <li key={item} className="text-gray-300">{item}</li>
      ))}
    </ul>
  </div>
);

export const HicksLawVisual: React.FC = () => {
    const [isComplex, setIsComplex] = useState(false);

    return (
        <div className="w-full max-w-md h-80 flex flex-col items-center justify-center p-4">
            <div className="w-full h-64 flex flex-col justify-center items-center p-4 border-2 border-dashed border-gray-700 rounded-lg">
                <Menu items={isComplex ? complexMenu : simpleMenu} />
                <p className="text-sm text-gray-500 mt-4 h-5">
                    {isComplex ? 'So many choices... this might take a moment.' : 'Easy to decide!'}
                </p>
            </div>
            <div className="mt-4 flex items-center space-x-4">
                <span className={`text-sm ${!isComplex ? 'text-white' : 'text-gray-500'}`}>Simple Choice</span>
                <button
                    onClick={() => setIsComplex(!isComplex)}
                    className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors bg-gray-600"
                    aria-label="Toggle menu complexity"
                >
                    <span
                        className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${isComplex ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                </button>
                <span className={`text-sm ${isComplex ? 'text-white' : 'text-gray-500'}`}>Complex Choice</span>
            </div>
        </div>
    );
};
