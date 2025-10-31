import React, { useState } from 'react';

export const HelpAndDocumentationVisual: React.FC = () => {
    const [showHelp, setShowHelp] = useState(false);

    return (
        <div className="w-full max-w-md h-72 flex flex-col items-center justify-center p-4">
            <div className="w-full h-48 flex flex-col justify-center items-center p-8 border-2 border-dashed border-gray-700 rounded-lg relative">

                <div className="flex items-center space-x-2 mb-4 self-start">
                    <h3 className="text-lg font-semibold text-gray-300">Advanced Settings</h3>
                    <button onClick={() => setShowHelp(!showHelp)} className="text-gray-500 hover:text-cyan-400" aria-label="Show help">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                
                <div className="w-full space-y-2">
                    <label className="text-sm text-gray-400">Render Quality</label>
                    <input type="range" className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" />
                </div>

                {showHelp && (
                    <div className="absolute top-16 left-8 w-4/5 bg-gray-900 border border-cyan-500 p-4 rounded-lg shadow-lg z-10">
                        <h4 className="font-bold text-cyan-400">What is Render Quality?</h4>
                        <p className="text-sm text-gray-300 mt-1">Adjusting this setting will change the resolution of the final output. Higher quality may impact performance.</p>
                        <button onClick={() => setShowHelp(false)} className="absolute top-1 right-1 text-gray-500 hover:text-white">&times;</button>
                    </div>
                )}
            </div>
             <p className="mt-4 text-sm text-gray-500">Click the <span className="text-cyan-400 font-bold">?</span> icon for contextual help.</p>
        </div>
    );
};