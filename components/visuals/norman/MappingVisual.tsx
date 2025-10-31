import React, { useState } from 'react';

const Burner = ({ isActive }: { isActive: boolean }) => (
    <div className={`w-16 h-16 rounded-full border-4 border-gray-600 flex items-center justify-center`}>
        <div className={`w-12 h-12 rounded-full transition-all duration-300 ${isActive ? 'bg-red-500 shadow-lg shadow-red-500/50' : 'bg-gray-800'}`}></div>
    </div>
);

const Control = ({ onClick }: { onClick: () => void }) => (
    <button onClick={onClick} className="w-8 h-8 rounded-full bg-gray-600 hover:bg-gray-500 border-2 border-gray-900"></button>
);

const burnerIndices = [0, 1, 2, 3];

export const MappingVisual: React.FC = () => {
    const [isGoodMapping, setIsGoodMapping] = useState(false);
    const [activeBurner, setActiveBurner] = useState<number | null>(null);

    const handleControlClick = (index: number) => {
        const mappedIndex = isGoodMapping ? index : (index + 2) % 4; // Arbitrary bad mapping
        setActiveBurner(mappedIndex);
        setTimeout(() => setActiveBurner(null), 1000);
    };

    const BadMappingControls = () => (
        <div className="flex flex-col gap-2">
            {burnerIndices.map(i => <Control key={i} onClick={() => handleControlClick(i)} />)}
        </div>
    );

    const GoodMappingControls = () => (
        <div className="grid grid-cols-2 gap-x-4 gap-y-12">
            <Control onClick={() => handleControlClick(0)} />
            <Control onClick={() => handleControlClick(1)} />
            <Control onClick={() => handleControlClick(2)} />
            <Control onClick={() => handleControlClick(3)} />
        </div>
    );

    return (
        <div className="w-full max-w-md h-96 flex flex-col items-center justify-center p-4">
            <div className="w-full h-72 flex justify-center items-center gap-8 p-4 border-2 border-dashed border-gray-700 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                    <Burner isActive={activeBurner === 0} />
                    <Burner isActive={activeBurner === 1} />
                    <Burner isActive={activeBurner === 2} />
                    <Burner isActive={activeBurner === 3} />
                </div>
                <div className="w-px h-48 bg-gray-700"></div>
                {isGoodMapping ? <GoodMappingControls /> : <BadMappingControls />}
            </div>
            <div className="mt-4 flex items-center space-x-4">
                <span className={`text-sm ${!isGoodMapping ? 'text-white' : 'text-gray-500'}`}>Bad Mapping</span>
                <button
                    onClick={() => setIsGoodMapping(!isGoodMapping)}
                    className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors bg-gray-600"
                    aria-label="Toggle mapping type"
                >
                    <span
                        className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${isGoodMapping ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                </button>
                <span className={`text-sm ${isGoodMapping ? 'text-white' : 'text-gray-500'}`}>Good Mapping</span>
            </div>
        </div>
    );
};