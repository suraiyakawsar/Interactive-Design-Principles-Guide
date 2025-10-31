import React, { useState, useRef } from 'react';

interface Target {
  x: number;
  y: number;
  size: number;
}

const generateTargets = (isEasy: boolean, count: number, width: number, height: number): Target[] => {
  const targets: Target[] = [];
  const size = isEasy ? 60 : 20;
  const margin = 20;

  for (let i = 0; i < count; i++) {
    targets.push({
      size,
      x: Math.random() * (width - size - margin * 2) + margin,
      y: Math.random() * (height - size - margin * 2) + margin,
    });
  }
  return targets;
};

export const FittsLawVisual: React.FC = () => {
  const [testState, setTestState] = useState<'idle' | 'running' | 'finished'>('idle');
  const [targets, setTargets] = useState<Target[]>([]);
  const [currentTarget, setCurrentTarget] = useState(0);
  const [time, setTime] = useState(0);
  const timerRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const startTest = (isEasy: boolean) => {
    if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setTargets(generateTargets(isEasy, 5, width, height));
        setCurrentTarget(0);
        setTestState('running');
        timerRef.current = performance.now();
    }
  };

  const handleTargetClick = () => {
    if (currentTarget < targets.length - 1) {
      setCurrentTarget(prev => prev + 1);
    } else {
      if (timerRef.current) {
        setTime(performance.now() - timerRef.current);
      }
      setTestState('finished');
    }
  };
  
  const reset = () => {
      setTestState('idle');
      setTime(0);
  }

  return (
    <div className="w-full max-w-lg h-96 flex flex-col items-center justify-center p-4">
      <div 
        ref={containerRef}
        className="w-full h-72 flex justify-center items-center p-4 border-2 border-dashed border-gray-700 rounded-lg relative"
      >
        {testState === 'idle' && (
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-300">Fitts's Law Challenge</h3>
            <p className="text-sm text-gray-500 mb-4">Click the targets as fast as you can.</p>
            <div className="flex gap-4">
                <button onClick={() => startTest(true)} className="px-4 py-2 bg-green-600 text-white rounded">Start Easy Test</button>
                <button onClick={() => startTest(false)} className="px-4 py-2 bg-red-600 text-white rounded">Start Hard Test</button>
            </div>
          </div>
        )}
        {testState === 'running' && targets[currentTarget] && (
            <button
                style={{
                    position: 'absolute',
                    left: targets[currentTarget].x,
                    top: targets[currentTarget].y,
                    width: targets[currentTarget].size,
                    height: targets[currentTarget].size,
                }}
                className="bg-cyan-500 rounded-full focus:outline-none ring-2 ring-cyan-300 animate-pulse"
                onClick={handleTargetClick}
                aria-label={`Target ${currentTarget + 1}`}
            />
        )}
        {testState === 'finished' && (
            <div className="text-center">
                <h3 className="text-2xl font-bold text-cyan-400">Finished!</h3>
                <p className="text-lg text-gray-300">Your time: <span className="font-mono">{(time / 1000).toFixed(2)}s</span></p>
                <button onClick={reset} className="mt-4 px-4 py-2 bg-gray-700 text-white rounded">Try Again</button>
            </div>
        )}
      </div>
      <p className="mt-4 text-sm text-gray-500 text-center">Notice how larger, closer targets are faster to hit.</p>
    </div>
  );
};
