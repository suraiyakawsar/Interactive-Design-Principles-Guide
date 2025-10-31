import React, { useState } from 'react';

const ArticleContent = () => (
    <div>
        <h3 className="text-2xl font-bold text-gray-200 mb-2">The Future of Web Design</h3>
        <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <p className="text-gray-400">Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.</p>
    </div>
);

const Sidebar = () => (
    <div className="w-full lg:w-48 bg-gray-800 p-3 rounded-lg space-y-2">
        <h4 className="font-semibold text-sm text-cyan-400">Related</h4>
        <div className="h-16 bg-gray-700 rounded animate-pulse"></div>
        <div className="h-16 bg-gray-700 rounded animate-pulse"></div>
    </div>
);

export const SituationalDesignVisual: React.FC = () => {
    const [isSimplified, setIsSimplified] = useState(false);

    return (
        <div className="w-full max-w-2xl h-96 flex flex-col items-center justify-center p-4">
            <div className="w-full h-80 flex justify-center items-start p-4 border-2 border-dashed border-gray-700 rounded-lg overflow-hidden">
                <div className={`w-full flex flex-col lg:flex-row gap-4 transition-all duration-300`}>
                    <div className="flex-grow">
                        <ArticleContent />
                    </div>
                    <div className={`transition-all duration-300 ${isSimplified ? 'hidden' : 'block'}`}>
                        <Sidebar />
                    </div>
                </div>
            </div>
            <div className="mt-4 flex items-center space-x-4">
                <span className={`text-sm ${!isSimplified ? 'text-white' : 'text-gray-500'}`}>Standard View</span>
                <button
                    onClick={() => setIsSimplified(!isSimplified)}
                    className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors bg-gray-600"
                    aria-label="Toggle simplified view"
                >
                    <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${isSimplified ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
                <span className={`text-sm ${isSimplified ? 'text-white' : 'text-gray-500'}`}>Simplified View</span>
            </div>
        </div>
    );
};