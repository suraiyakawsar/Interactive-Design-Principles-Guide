import React, { useState } from 'react';

const Dot = ({ index, isActive }: { index: number, isActive: boolean }) => {
    const isMovingDot = index % 3 === 0;
    const transformClass = (isActive && isMovingDot) ? 'translate-x-12 -translate-y-12' : 'translate-x-0 translate-y-0';
    return (
        <div className={`w-4 h-4 rounded-full transition-all duration-1000 ease-in-out ${isMovingDot ? 'bg-cyan-500' : 'bg-gray-700'} ${transformClass}`}></div>
    );
};

export const CommonFateVisual: React.FC = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="w-full max-w-md h-72 flex flex-col items-center justify-between p-4">
            <div className="w-full h-64 flex items-center justify-center p-4 border-2 border-dashed border-gray-700 rounded-lg overflow-hidden">
                <div className="grid grid-cols-5 gap-6">
                    {[...Array(25)].map((_, i) => (
                        <Dot key={i} index={i} isActive={isActive} />
                    ))}
                </div>
            </div>
            <button
                onClick={() => setIsActive(!isActive)}
                className="mt-4 px-4 py-2 bg-gray-700 hover:bg-cyan-600 text-white rounded-lg transition-colors"
            >
                {isActive ? 'Reset Movement' : 'Move Group'}
            </button>
        </div>
    );
};