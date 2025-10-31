
import React, { useState } from 'react';

const positions = [
    // Group 1
    { grouped: 'translate-x-[-120px] translate-y-[-40px]', scattered: 'translate-x-[-30px] translate-y-[50px]' },
    { grouped: 'translate-x-[-80px] translate-y-[-40px]', scattered: 'translate-x-[100px] translate-y-[-60px]' },
    { grouped: 'translate-x-[-120px] translate-y-[0px]', scattered: 'translate-x-[-130px] translate-y-[0px]' },
    { grouped: 'translate-x-[-80px] translate-y-[0px]', scattered: 'translate-x-[-10px] translate-y-[-80px]' },
    // Group 2
    { grouped: 'translate-x-[80px] translate-y-[-20px]', scattered: 'translate-x-[120px] translate-y-[20px]' },
    { grouped: 'translate-x-[120px] translate-y-[-20px]', scattered: 'translate-x-[-100px] translate-y-[70px]' },
    { grouped: 'translate-x-[80px] translate-y-[20px]', scattered: 'translate-x-[40px] translate-y-[-20px]' },
];

export const ProximityVisual: React.FC = () => {
  const [isGrouped, setIsGrouped] = useState(false);

  return (
    <div className="w-full max-w-lg h-72 flex flex-col justify-between items-center p-4">
      <div className="w-full h-64 flex justify-center items-center p-4 border-2 border-dashed border-gray-700 rounded-lg relative">
        {positions.map((pos, i) => (
            <div
                key={i}
                className={`absolute w-8 h-8 rounded-full transition-transform duration-500 ease-in-out ${i < 4 ? 'bg-cyan-500' : 'bg-blue-500'} ${ isGrouped ? pos.grouped : pos.scattered }`}
            ></div>
        ))}
      </div>
       <button
        onClick={() => setIsGrouped(!isGrouped)}
        className="mt-4 px-4 py-2 bg-gray-700 hover:bg-cyan-600 text-white rounded-lg transition-colors"
      >
        {isGrouped ? 'Scatter Elements' : 'Group by Proximity'}
      </button>
    </div>
  );
};
