import React, { useState } from 'react';

// FIX: Using `React.ElementType` for the `tag` prop and renaming it to `TagComponent`
// allows it to be used as a valid JSX component, resolving errors related to the missing `JSX` namespace.
const PageSection = ({ tag: TagComponent, children, color }: { tag: React.ElementType, children: React.ReactNode, color: string }) => {
    return (
        <TagComponent className={`relative group p-2 border-2 ${color}`}>
            {children}
            <div className="absolute -top-3 left-2 px-1 text-xs bg-gray-900 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                {typeof TagComponent === 'string' ? `<${TagComponent}>` : '<Component>'}
            </div>
        </TagComponent>
    );
};

const SemanticLayout = () => (
    <div className="w-full h-full flex flex-col gap-2">
        <PageSection tag="header" color="border-blue-500">Header</PageSection>
        <div className="flex-grow flex gap-2">
            <PageSection tag="nav" color="border-purple-500">Nav</PageSection>
            <PageSection tag="main" color="border-green-500">Main Content</PageSection>
        </div>
        <PageSection tag="footer" color="border-yellow-500">Footer</PageSection>
    </div>
);

const NonSemanticLayout = () => (
     <div className="w-full h-full flex flex-col gap-2">
        <PageSection tag="div" color="border-blue-500">Header</PageSection>
        <div className="flex-grow flex gap-2">
            <PageSection tag="div" color="border-purple-500">Nav</PageSection>
            <PageSection tag="div" color="border-green-500">Main Content</PageSection>
        </div>
        <PageSection tag="div" color="border-yellow-500">Footer</PageSection>
    </div>
);

export const RobustVisual: React.FC = () => {
    const [isRobust, setIsRobust] = useState(false);

    return (
        <div className="w-full max-w-md h-80 flex flex-col items-center justify-center p-4">
            <div className="w-full h-64 flex flex-col justify-center items-center p-4 text-center text-gray-300 border-2 border-dashed border-gray-700 rounded-lg">
                {isRobust ? <SemanticLayout /> : <NonSemanticLayout />}
            </div>
             <div className="mt-4 flex items-center space-x-4">
                <span className={`text-sm ${!isRobust ? 'text-white' : 'text-gray-500'}`}>Non-Semantic</span>
                <button
                    onClick={() => setIsRobust(!isRobust)}
                    className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors bg-gray-600"
                    aria-label="Toggle layout type"
                >
                    <span
                        className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${isRobust ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                </button>
                <span className={`text-sm ${isRobust ? 'text-white' : 'text-gray-500'}`}>Semantic (Robust)</span>
            </div>
        </div>
    );
};
