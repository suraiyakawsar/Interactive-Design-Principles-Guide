import React, { useState, useEffect } from 'react';

export const ShortcutsVisual: React.FC = () => {
    const [lastAction, setLastAction] = useState<string>('None');

    const performAction = (action: string) => {
        setLastAction(`${action} at ${new Date().toLocaleTimeString()}`);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.altKey && e.key === 'c') {
                 e.preventDefault();
                 performAction('Copy (shortcut)');
            }
            if (e.altKey && e.key === 'p') {
                 e.preventDefault();
                 performAction('Paste (shortcut)');
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="w-full max-w-md h-72 flex flex-col items-center justify-center p-4">
            <div className="w-full h-56 flex flex-col justify-center items-center p-6 border-2 border-dashed border-gray-700 rounded-lg">
                <div className="flex items-center gap-4">
                    <button onClick={() => performAction('Copy (button)')} className="bg-gray-700 hover:bg-cyan-600 text-white px-4 py-2 rounded">
                        Copy <kbd className="ml-2 text-xs bg-gray-600 p-1 rounded">Alt+C</kbd>
                    </button>
                    <button onClick={() => performAction('Paste (button)')} className="bg-gray-700 hover:bg-cyan-600 text-white px-4 py-2 rounded">
                        Paste <kbd className="ml-2 text-xs bg-gray-600 p-1 rounded">Alt+P</kbd>
                    </button>
                </div>
                <p className="mt-8 text-gray-400">Last Action:</p>
                <p className="text-lg text-cyan-400 font-mono h-6">{lastAction}</p>
            </div>
            <p className="mt-4 text-sm text-gray-500">Use buttons or keyboard shortcuts (Alt + C/P).</p>
        </div>
    );
};