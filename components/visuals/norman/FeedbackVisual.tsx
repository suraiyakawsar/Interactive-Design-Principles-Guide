import React, { useState, useEffect } from 'react';

export const FeedbackVisual: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleClick = () => {
        if (status === 'idle') {
            setStatus('loading');
        }
    };
    
    useEffect(() => {
        if (status === 'loading') {
            const timer = setTimeout(() => {
                setStatus('success');
            }, 1500);
            return () => clearTimeout(timer);
        }
        if (status === 'success') {
            const timer = setTimeout(() => {
                setStatus('idle');
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const getButtonContent = () => {
        switch (status) {
            case 'loading':
                return (
                    <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Saving...
                    </div>
                );
            case 'success':
                return '✓ Success!';
            default:
                return 'Submit';
        }
    };
    
    const getButtonClass = () => {
         switch (status) {
            case 'loading':
                return 'bg-cyan-700 cursor-wait';
            case 'success':
                return 'bg-green-600';
            default:
                return 'bg-cyan-600 hover:bg-cyan-500';
        }
    }

    return (
        <div className="w-full max-w-sm h-72 flex flex-col items-center justify-center p-4">
            <div className="w-full h-48 flex flex-col justify-center items-center p-8 border-2 border-dashed border-gray-700 rounded-lg">
                <button
                    onClick={handleClick}
                    disabled={status !== 'idle'}
                    className={`px-8 py-3 w-48 h-14 text-white font-bold rounded-lg text-lg transition-all duration-300 ${getButtonClass()}`}
                >
                    {getButtonContent()}
                </button>
            </div>
            <p className="mt-4 text-sm text-gray-500">Click the button to see system feedback.</p>
        </div>
    );
};