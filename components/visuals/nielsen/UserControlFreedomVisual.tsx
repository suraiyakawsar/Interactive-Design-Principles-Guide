import React, { useState, useEffect } from 'react';

export const UserControlFreedomVisual: React.FC = () => {
    const [action, setAction] = useState<'idle' | 'deleted' | 'undone'>('idle');
    const [showUndo, setShowUndo] = useState(false);

    const handleDelete = () => {
        setAction('deleted');
        setShowUndo(true);
    };

    const handleUndo = () => {
        setAction('undone');
        setShowUndo(false);
    };
    
    useEffect(() => {
        let timer: number;
        if (showUndo) {
            timer = window.setTimeout(() => {
                setShowUndo(false);
                if (action === 'deleted') setAction('idle');
            }, 4000);
        }
        return () => clearTimeout(timer);
    }, [showUndo, action]);

    return (
        <div className="w-full max-w-md h-72 flex flex-col items-center justify-center p-4 relative overflow-hidden">
            <div className="w-full h-48 flex flex-col justify-center items-center p-8 border-2 border-dashed border-gray-700 rounded-lg space-y-4">
                <div className={`flex items-center justify-between w-full p-3 bg-gray-800 rounded-lg transition-all duration-300 ${action === 'deleted' ? 'opacity-0 -translate-x-8' : 'opacity-100 translate-x-0'}`}>
                    <p className="text-gray-300">ImportantFile.docx</p>
                    <button 
                        onClick={handleDelete}
                        className="text-red-500 hover:text-red-400" 
                        aria-label="Delete file"
                        disabled={action === 'deleted'}
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                 <p className="text-gray-500 h-10">
                    {action === 'undone' && 'Phew! That was close.'}
                </p>
            </div>
            
            <div className={`absolute bottom-12 w-11/12 max-w-sm transition-all duration-300 ease-in-out ${showUndo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                 {showUndo && (
                    <div className="bg-blue-600 text-white p-3 rounded-lg flex items-center justify-between shadow-lg">
                        <span>File moved to trash.</span>
                        <button onClick={handleUndo} className="font-bold underline">Undo</button>
                    </div>
                )}
            </div>

            <p className="mt-4 text-sm text-gray-500">Click the trash icon to delete.</p>

        </div>
    );
};