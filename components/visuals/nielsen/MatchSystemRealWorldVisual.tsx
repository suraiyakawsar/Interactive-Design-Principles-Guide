import React, { useState } from 'react';

const Card = ({ icon, title, description }: { icon: string, title: string, description: string }) => (
    <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4 w-full">
        <span className="text-3xl">{icon}</span>
        <div>
            <h3 className="font-bold text-cyan-400">{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
        </div>
    </div>
);

const systemTerms = {
    icon: '💾',
    title: 'Commit 0x2A4F',
    description: 'Execute process to persist current state to memory block.'
};

const realWorldTerms = {
    icon: '📄',
    title: 'Save Document',
    description: 'Save your changes so you can come back to them later.'
};

export const MatchSystemRealWorldVisual: React.FC = () => {
    const [useRealWorld, setUseRealWorld] = useState(true);
    const content = useRealWorld ? realWorldTerms : systemTerms;

    return (
        <div className="w-full max-w-md h-72 flex flex-col items-center justify-center p-4">
            <div className="w-full h-48 flex flex-col justify-center items-center p-8 border-2 border-dashed border-gray-700 rounded-lg">
                <Card icon={content.icon} title={content.title} description={content.description} />
            </div>
             <div className="mt-4 flex items-center space-x-4">
                <span className={`text-sm ${!useRealWorld ? 'text-white' : 'text-gray-500'}`}>System Jargon</span>
                <button
                    onClick={() => setUseRealWorld(!useRealWorld)}
                    className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors bg-gray-600"
                    aria-label="Toggle language style"
                >
                    <span
                        className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${useRealWorld ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                </button>
                <span className={`text-sm ${useRealWorld ? 'text-white' : 'text-gray-500'}`}>Real World</span>
            </div>
        </div>
    );
};