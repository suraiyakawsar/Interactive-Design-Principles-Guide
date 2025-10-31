import React, { useState, useEffect } from 'react';

export const FlexibilityEfficiencyVisual: React.FC = () => {
    const [status, setStatus] = useState('Unsaved changes');

    const handleSave = () => {
        setStatus('Saved!');
        setTimeout(() => setStatus('Unsaved changes'), 2000);
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if ((event.ctrlKey || event.metaKey) && event.key === 's') {
                event.preventDefault();
                handleSave();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="w-full max-w-md h-72 flex flex-col items-center justify-center p-4">
            <div className="w-full h-56 flex flex-col justify-start p-4 border-2 border-dashed border-gray-700 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                    <button onClick={handleSave} className="bg-gray-700 hover:bg-cyan-600 text-white px-3 py-1 rounded text-sm">
                        Save
                    </button>
                     <p className="text-sm text-gray-400">
                        Pro tip: Use <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">Ctrl+S</kbd>
                    </p>
                </div>
                <div className="w-full h-full bg-gray-800 rounded p-2 text-gray-300 text-sm">
                    This is some text in the editor.
                    <br />
                    Try saving with the button or the shortcut.
                </div>
                <p className={`mt-2 text-center text-sm h-5 ${status === 'Saved!' ? 'text-green-400' : 'text-yellow-400'}`}>{status}</p>
            </div>
            <p className="mt-4 text-sm text-gray-500">Catering to both novice and expert users.</p>
        </div>
    );
};