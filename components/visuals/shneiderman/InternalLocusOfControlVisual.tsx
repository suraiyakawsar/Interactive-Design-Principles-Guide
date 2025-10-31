import React, { useState } from 'react';

const initialPanels = ['Profile', 'Analytics', 'Settings'];

const Panel = ({ name, onMoveLeft, onMoveRight, isFirst, isLast }: { name: string, onMoveLeft: () => void, onMoveRight: () => void, isFirst: boolean, isLast: boolean }) => (
    <div className="bg-gray-800 rounded-lg p-3 w-32 h-24 flex flex-col justify-between">
        <h4 className="font-bold text-center text-cyan-400">{name}</h4>
        <div className="flex justify-between">
            <button onClick={onMoveLeft} disabled={isFirst} className="text-xl disabled:opacity-20 hover:text-cyan-300">‹</button>
            <button onClick={onMoveRight} disabled={isLast} className="text-xl disabled:opacity-20 hover:text-cyan-300">›</button>
        </div>
    </div>
);


export const InternalLocusOfControlVisual: React.FC = () => {
    const [panels, setPanels] = useState(initialPanels);

    const movePanel = (index: number, direction: 'left' | 'right') => {
        const newPanels = [...panels];
        const targetIndex = direction === 'left' ? index - 1 : index + 1;

        if (targetIndex < 0 || targetIndex >= newPanels.length) {
            return;
        }

        [newPanels[index], newPanels[targetIndex]] = [newPanels[targetIndex], newPanels[index]]; // Swap
        setPanels(newPanels);
    };

    return (
        <div className="w-full max-w-lg h-72 flex flex-col items-center justify-center p-4">
            <div className="w-full h-48 flex flex-col justify-center items-center p-4 border-2 border-dashed border-gray-700 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-300 mb-4">Customize Your Dashboard</h3>
                <div className="flex items-center gap-4">
                    {panels.map((name, index) => (
                        <Panel 
                            key={name} 
                            name={name}
                            onMoveLeft={() => movePanel(index, 'left')}
                            onMoveRight={() => movePanel(index, 'right')}
                            isFirst={index === 0}
                            isLast={index === panels.length - 1}
                        />
                    ))}
                </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">Use the arrows to reorder the panels.</p>
        </div>
    );
};