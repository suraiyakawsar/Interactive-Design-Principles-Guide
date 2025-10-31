import React, { useState } from 'react';

const Dot = ({ cx, cy, colorClass }: { cx: number, cy: number, colorClass: string }) => (
    <circle cx={cx} cy={cy} r="5" className={`transition-colors duration-500 ${colorClass}`} />
);

export const ContinuityVisual: React.FC = () => {
    const [isColored, setIsColored] = useState(false);
    
    const line1 = Array.from({ length: 15 }, (_, i) => ({
        x: 20 + i * 20,
        y: 100 + 70 * Math.sin(i / 4)
    }));
    
    const line2 = Array.from({ length: 15 }, (_, i) => ({
        x: 20 + i * 20,
        y: 100 - 70 * Math.sin(i / 4)
    }));

    return (
        <div className="w-full max-w-lg h-72 flex flex-col items-center justify-between p-4">
            <div className="w-full h-64 flex justify-center items-center p-4 border-2 border-dashed border-gray-700 rounded-lg">
                <svg width="320" height="200" viewBox="0 0 320 200">
                    {line1.map((p, i) => <Dot key={`l1-${i}`} cx={p.x} cy={p.y} colorClass={isColored ? 'fill-cyan-500' : 'fill-gray-600'} />)}
                    {line2.map((p, i) => <Dot key={`l2-${i}`} cx={p.x} cy={p.y} colorClass={isColored ? 'fill-blue-500' : 'fill-gray-600'} />)}
                </svg>
            </div>
            <button
                onClick={() => setIsColored(!isColored)}
                className="mt-4 px-4 py-2 bg-gray-700 hover:bg-cyan-600 text-white rounded-lg transition-colors"
            >
                {isColored ? 'Unify Color' : 'Follow the Lines'}
            </button>
        </div>
    );
};