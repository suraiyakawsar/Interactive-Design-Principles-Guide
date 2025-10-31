import React, { useState } from 'react';

const AdvancedInterface = () => (
    <div className="space-y-3 w-full animate-fade-in-fast">
        <div>
            <label className="text-sm text-gray-400">Date</label>
            <input type="date" className="w-full p-2 mt-1 rounded bg-gray-900 border border-gray-600 text-white" />
        </div>
        <div>
            <label className="text-sm text-gray-400">Time</label>
            <input type="time" className="w-full p-2 mt-1 rounded bg-gray-900 border border-gray-600 text-white" />
        </div>
    </div>
);

const SimpleInterface = () => (
    <div className="space-y-2 w-full animate-fade-in-fast">
        <label className="text-sm text-gray-400">Describe the event</label>
        <input 
            type="text" 
            placeholder="e.g., Team meeting tomorrow at 3pm"
            className="w-full p-2 mt-1 rounded bg-gray-900 border border-gray-600 text-white" 
        />
        <p className="text-xs text-gray-500">The system will parse the date and time for you.</p>
    </div>
);

const AnimationStyles = () => (
  <style>{`
    @keyframes fadeInFast { from { opacity: 0; } to { opacity: 1; } }
    .animate-fade-in-fast { animation: fadeInFast 0.3s ease-in-out forwards; }
  `}</style>
);

export const TeslersLawVisual: React.FC = () => {
    const [isSimple, setIsSimple] = useState(false);

    return (
        <>
        <AnimationStyles />
        <div className="w-full max-w-sm h-80 flex flex-col items-center justify-center p-4">
            <div className="w-full h-64 flex flex-col justify-center p-6 border-2 border-dashed border-gray-700 rounded-lg">
                 <h3 className="text-lg font-bold text-gray-300 mb-4">Schedule Event</h3>
                {isSimple ? <SimpleInterface /> : <AdvancedInterface />}
            </div>
            <div className="mt-4 flex items-center space-x-4">
                <span className={`text-sm ${!isSimple ? 'text-white' : 'text-gray-500'}`}>User Handles Complexity</span>
                <button
                    onClick={() => setIsSimple(!isSimple)}
                    className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors bg-gray-600"
                    aria-label="Toggle interface complexity"
                >
                    <span
                        className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${isSimple ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                </button>
                <span className={`text-sm ${isSimple ? 'text-white' : 'text-gray-500'}`}>System Handles Complexity</span>
            </div>
        </div>
        </>
    );
};
