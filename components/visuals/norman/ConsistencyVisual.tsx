import React, { useState } from 'react';

const PageView = ({ page, isConsistent, highlight }: { page: 'Profile' | 'Settings', isConsistent: boolean, highlight: boolean }) => {
    const consistentButton = "absolute bottom-4 right-4 px-4 py-2 bg-cyan-600 text-white rounded";
    
    const profileInconsistent = "absolute top-4 left-4 px-6 py-1 bg-blue-500 text-white rounded-full";
    const settingsInconsistent = "absolute bottom-4 right-4 w-full h-12 bg-green-500 text-black text-lg";

    const buttonClass = isConsistent 
        ? consistentButton 
        : (page === 'Profile' ? profileInconsistent : settingsInconsistent);

    const buttonText = isConsistent ? 'Save' : (page === 'Profile' ? 'Update' : 'Confirm Changes');

    return (
        <div className="w-full h-full bg-gray-800 rounded-lg p-4 relative">
            <h3 className="text-xl font-bold text-gray-300">{page} Page</h3>
            <p className="text-gray-500">Some content for the {page.toLowerCase()} page.</p>
            <button className={`${buttonClass} ${highlight && !isConsistent ? 'ring-2 ring-red-500' : ''}`}>{buttonText}</button>
        </div>
    );
}

export const ConsistencyVisual: React.FC = () => {
    const [isConsistent, setIsConsistent] = useState(true);
    const [page, setPage] = useState<'Profile' | 'Settings'>('Profile');
    
    return (
        <div className="w-full max-w-sm h-96 flex flex-col items-center justify-center p-4">
            <div className="w-full h-56 border-2 border-dashed border-gray-700 rounded-lg">
                <PageView page={page} isConsistent={isConsistent} highlight={true} />
            </div>
             <div className="my-4 flex items-center space-x-4">
                <span className={`text-sm ${!isConsistent ? 'text-white' : 'text-gray-500'}`}>Inconsistent</span>
                <button
                    onClick={() => setIsConsistent(!isConsistent)}
                    className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors bg-gray-600"
                    aria-label="Toggle consistency"
                >
                    <span
                        className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${isConsistent ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                </button>
                <span className={`text-sm ${isConsistent ? 'text-white' : 'text-gray-500'}`}>Consistent</span>
            </div>
            <div className="flex items-center gap-4">
                 <button
                    onClick={() => setPage(p => p === 'Profile' ? 'Settings' : 'Profile')}
                    className="px-4 py-2 bg-gray-700 hover:bg-cyan-600 text-white rounded-lg transition-colors"
                >
                    Switch to {page === 'Profile' ? 'Settings' : 'Profile'}
                </button>
            </div>
        </div>
    );
};