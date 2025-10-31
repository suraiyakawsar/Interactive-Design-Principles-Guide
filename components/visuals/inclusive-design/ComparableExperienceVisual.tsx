import React, { useState } from 'react';

const transcriptText = `
(Music starts)\n
Presenter: Welcome to our presentation on inclusive design. Today, we'll explore how to create experiences that work for everyone.\n
(Slide changes)\n
Presenter: Our first principle is providing a comparable experience. This means ensuring that users can access the same information and functionality, regardless of their abilities.\n
(Music fades)
`;

export const ComparableExperienceVisual: React.FC = () => {
    const [showCaptions, setShowCaptions] = useState(false);
    const [view, setView] = useState<'video' | 'transcript'>('video');

    return (
        <div className="w-full max-w-lg h-96 flex flex-col items-center justify-center p-4">
            <div className="w-full h-72 flex flex-col justify-center items-center p-2 border-2 border-dashed border-gray-700 rounded-lg">
                <div className="w-full border-b border-gray-700 flex mb-2">
                    <button onClick={() => setView('video')} className={`px-4 py-1 text-sm ${view === 'video' ? 'bg-gray-700 text-white' : 'text-gray-400'}`}>Video</button>
                    <button onClick={() => setView('transcript')} className={`px-4 py-1 text-sm ${view === 'transcript' ? 'bg-gray-700 text-white' : 'text-gray-400'}`}>Transcript</button>
                </div>

                {view === 'video' ? (
                    <div className="w-full h-full bg-black rounded relative flex items-center justify-center text-white">
                        <svg className="w-16 h-16 opacity-50" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"></path></svg>
                        {showCaptions && (
                            <div className="absolute bottom-2 left-2 right-2 bg-black/70 p-2 rounded text-center text-sm">
                                <p>Presenter: Welcome to our presentation on inclusive design.</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="w-full h-full bg-gray-800 rounded p-3 text-sm text-gray-300 overflow-y-auto">
                        <pre className="whitespace-pre-wrap font-sans">{transcriptText}</pre>
                    </div>
                )}
            </div>
            <div className="mt-4">
                 <button 
                    onClick={() => setShowCaptions(!showCaptions)}
                    className="px-4 py-2 bg-gray-700 hover:bg-cyan-600 text-white rounded-lg transition-colors"
                    disabled={view === 'transcript'}
                >
                     {showCaptions ? 'Hide Captions' : 'Show Captions'}
                 </button>
            </div>
        </div>
    );
};