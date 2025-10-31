import React, { useState, useEffect } from 'react';

type Status = 'idle' | 'uploading' | 'processing' | 'complete' | 'failed';
const STATUS_MESSAGES: Record<Status, string> = {
    idle: 'Ready to upload',
    uploading: 'Uploading file...',
    processing: 'Processing...',
    complete: 'Upload complete!',
    failed: 'Upload failed.',
};

export const VisibilityOfSystemStatusVisual: React.FC = () => {
    const [status, setStatus] = useState<Status>('idle');
    const [progress, setProgress] = useState(0);

    const handleUpload = () => {
        if (status !== 'idle' && status !== 'complete' && status !== 'failed') return;
        
        setStatus('uploading');
        setProgress(0);
    };

    useEffect(() => {
        if (status === 'uploading') {
            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setStatus('processing');
                        return 100;
                    }
                    return prev + 2;
                });
            }, 50);
            return () => clearInterval(interval);
        } else if (status === 'processing') {
            const timeout = setTimeout(() => {
                setStatus('complete');
            }, 1500);
            return () => clearTimeout(timeout);
        } else if (status === 'complete' || status === 'failed') {
            const timeout = setTimeout(() => {
                 setStatus('idle');
                 setProgress(0);
            }, 3000);
             return () => clearTimeout(timeout);
        }
    }, [status]);

    const getStatusColor = () => {
        switch(status) {
            case 'complete': return 'bg-green-500';
            case 'failed': return 'bg-red-500';
            default: return 'bg-cyan-500';
        }
    }

    return (
        <div className="w-full max-w-md h-72 flex flex-col items-center justify-center p-4">
            <div className="w-full h-48 flex flex-col justify-center items-center p-8 border-2 border-dashed border-gray-700 rounded-lg space-y-4">
                <p className="text-lg font-medium text-gray-300">{STATUS_MESSAGES[status]}</p>
                <div className="w-full bg-gray-600 rounded-full h-4">
                    <div
                        className={`h-4 rounded-full transition-all duration-300 ease-linear ${getStatusColor()}`}
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <p className="text-sm text-gray-400">{status === 'uploading' || status === 'processing' ? `${progress}%` : ''}&nbsp;</p>
            </div>
            <button
                onClick={handleUpload}
                disabled={status !== 'idle' && status !== 'complete' && status !== 'failed'}
                className="mt-4 px-4 py-2 bg-gray-700 hover:bg-cyan-600 text-white rounded-lg transition-colors disabled:bg-gray-800 disabled:text-gray-500 disabled:cursor-not-allowed"
            >
                Start Upload
            </button>
        </div>
    );
};