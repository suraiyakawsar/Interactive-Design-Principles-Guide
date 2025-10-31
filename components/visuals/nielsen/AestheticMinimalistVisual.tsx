import React, { useState } from 'react';

const ClutteredView = () => (
    <div className="bg-gray-800 border-4 border-yellow-500 p-3 rounded-lg w-full h-full flex flex-col justify-center items-center space-y-2 animate-fade-in-fast">
        <img src="https://i.pravatar.cc/80?img=1" alt="User avatar" className="rounded-full border-4 border-purple-500" />
        <h3 className="text-xl font-bold text-cyan-400 font-serif">--= John Doe =--</h3>
        <p className="text-xs text-gray-400">USER_ID: 1023-AD-498B</p>
        <p className="text-xs text-green-400">Status: ONLINE</p>
        <p className="text-sm text-gray-500">Last login: 12/25/2024 14:33:01</p>
        <button className="px-2 py-1 text-sm bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded shadow-lg">VIEW PROFILE</button>
    </div>
);

const MinimalistView = () => (
    <div className="bg-gray-800 p-4 rounded-lg w-full h-full flex flex-col justify-center items-start space-y-3 animate-fade-in-fast">
        <div className="flex items-center space-x-4">
             <img src="https://i.pravatar.cc/48?img=1" alt="User avatar" className="rounded-full" />
             <div>
                <h3 className="text-lg font-semibold text-gray-200">John Doe</h3>
                <p className="text-sm text-gray-400">Editor</p>
             </div>
        </div>
        <p className="text-sm text-gray-500 pt-2">Focus on the relevant information to avoid distracting the user from their primary goal.</p>
    </div>
);

const AnimationStyles = () => (
  <style>
    {`
      @keyframes fadeInFast {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .animate-fade-in-fast {
        animation: fadeInFast 0.3s ease-in-out forwards;
      }
    `}
  </style>
);


export const AestheticMinimalistVisual: React.FC = () => {
    const [isMinimal, setIsMinimal] = useState(true);

    return (
        <>
        <AnimationStyles />
        <div className="w-full max-w-md h-72 flex flex-col items-center justify-center p-4">
            <div className="w-full h-48 flex justify-center items-center p-1 border-2 border-dashed border-gray-700 rounded-lg">
                {isMinimal ? <MinimalistView /> : <ClutteredView />}
            </div>
             <div className="mt-4 flex items-center space-x-4">
                <span className={`text-sm ${!isMinimal ? 'text-white' : 'text-gray-500'}`}>Cluttered</span>
                <button
                    onClick={() => setIsMinimal(!isMinimal)}
                    className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors bg-gray-600"
                    aria-label="Toggle view"
                >
                    <span
                        className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${isMinimal ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                </button>
                <span className={`text-sm ${isMinimal ? 'text-white' : 'text-gray-500'}`}>Minimalist</span>
            </div>
        </div>
        </>
    );
};