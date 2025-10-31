import React, { useState, useEffect } from 'react';

export const InformativeFeedbackVisual: React.FC = () => {
    const [feedbackType, setFeedbackType] = useState<'modest' | 'substantial'>('modest');
    const [status, setStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
    const [showToast, setShowToast] = useState(false);

    const handleSave = () => {
        if (status === 'saving') return;
        setStatus('saving');
    };
    
    useEffect(() => {
        if (status === 'saving') {
            const timer = setTimeout(() => {
                setStatus('saved');
                if(feedbackType === 'substantial') {
                    setShowToast(true);
                }
            }, 500);
            return () => clearTimeout(timer);
        }
        if (status === 'saved') {
            const timer = setTimeout(() => {
                setStatus('idle');
                setShowToast(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [status, feedbackType]);

    const getButtonText = () => {
        if (feedbackType === 'modest' && status === 'saved') return '✓ Saved';
        if (status === 'saving') return 'Saving...';
        return 'Save';
    };

    return (
        <div className="w-full max-w-md h-72 flex flex-col items-center justify-center p-4 relative">
            <div className="w-full h-48 flex flex-col justify-center items-center p-8 border-2 border-dashed border-gray-700 rounded-lg">
                <div className="mb-6 flex gap-4">
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="feedback" value="modest" checked={feedbackType === 'modest'} onChange={() => setFeedbackType('modest')} />
                        <span>Modest Feedback</span>
                    </label>
                     <label className="flex items-center space-x-2">
                        <input type="radio" name="feedback" value="substantial" checked={feedbackType === 'substantial'} onChange={() => setFeedbackType('substantial')} />
                        <span>Substantial Feedback</span>
                    </label>
                </div>
                <button
                    onClick={handleSave}
                    className={`px-6 py-2 rounded text-white transition-colors duration-300 ${status === 'saved' && feedbackType === 'modest' ? 'bg-green-600' : 'bg-cyan-600 hover:bg-cyan-500'}`}
                >
                    {getButtonText()}
                </button>
            </div>
             <div className={`absolute bottom-12 transition-all duration-300 ease-in-out ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                 {showToast && (
                    <div className="bg-green-600 text-white p-3 rounded-lg flex items-center shadow-lg">
                       <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span>Document saved successfully!</span>
                    </div>
                )}
            </div>
             <p className="mt-4 text-sm text-gray-500">Choose a feedback type and click "Save".</p>
        </div>
    );
};