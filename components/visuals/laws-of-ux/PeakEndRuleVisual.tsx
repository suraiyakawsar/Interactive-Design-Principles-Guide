import React, { useState, useEffect } from 'react';

const scenarioA = [50, 45, 40, 85, 35, 40, 50]; // High peak frustration
const scenarioB = [50, 60, 55, 30, 40, 10, 5]; // Ends on a high note (low frustration)

const dataToPath = (data: number[], width: number, height: number) => {
  const step = width / (data.length - 1);
  return data.map((p, i) => `${i === 0 ? 'M' : 'L'} ${i * step},${(p / 100) * height}`).join(' ');
};

const labels = [
    { y: 0, text: 'Delightful', color: 'text-green-400' },
    { y: 50, text: 'Neutral', color: 'text-gray-400' },
    { y: 100, text: 'Frustrating', color: 'text-red-400' },
];

export const PeakEndRuleVisual: React.FC = () => {
    const [scenario, setScenario] = useState<'A' | 'B' | null>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let frameId: number;
        if (scenario) {
            let start: number | null = null;
            const animate = (timestamp: number) => {
                if (!start) start = timestamp;
                const elapsed = timestamp - start;
                const newProgress = Math.min(elapsed / 3000, 1); // 3 second animation
                setProgress(newProgress);
                if (newProgress < 1) {
                    frameId = requestAnimationFrame(animate);
                }
            };
            frameId = requestAnimationFrame(animate);
        } else {
            setProgress(0);
        }
        return () => cancelAnimationFrame(frameId);
    }, [scenario]);

    const width = 300;
    const height = 150;
    const currentData = scenario === 'A' ? scenarioA : scenarioB;
    const path = dataToPath(currentData, width, height);
    const strokeDasharray = width * 2;
    const strokeDashoffset = strokeDasharray * (1 - progress);

    return (
        <div className="w-full max-w-md h-96 flex flex-col items-center justify-center p-4">
            <div className="w-full h-64 flex flex-col justify-center items-center p-4 border-2 border-dashed border-gray-700 rounded-lg">
                 <h3 className="text-lg font-semibold text-gray-300 mb-2">User Journey</h3>
                 <div className="flex items-center">
                    <div className="flex flex-col justify-between h-40 text-xs mr-2">
                        {labels.map(l => <span key={l.text} className={l.color}>{l.text}</span>)}
                    </div>
                    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="bg-gray-800 rounded">
                        {scenario && (
                           <path 
                             d={path} 
                             fill="none" 
                             stroke="currentColor" 
                             strokeWidth="3" 
                             className="text-cyan-400"
                             strokeDasharray={strokeDasharray}
                             strokeDashoffset={strokeDashoffset}
                           />
                        )}
                    </svg>
                 </div>
            </div>
            <div className="mt-4 flex items-center gap-4">
                 <button onClick={() => setScenario('A')} className="px-4 py-2 bg-gray-700 hover:bg-cyan-600 text-white rounded-lg">
                    Play Scenario A
                 </button>
                 <button onClick={() => setScenario('B')} className="px-4 py-2 bg-gray-700 hover:bg-cyan-600 text-white rounded-lg">
                    Play Scenario B
                 </button>
            </div>
             <p className="mt-2 text-sm text-gray-500 text-center h-5">
                {scenario === 'A' && progress === 1 && 'Remembered for its frustrating peak.'}
                {scenario === 'B' && progress === 1 && 'Remembered for its delightful end.'}
             </p>
        </div>
    );
};
