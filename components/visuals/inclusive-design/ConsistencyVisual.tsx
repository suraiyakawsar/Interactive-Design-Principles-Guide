import React, { useState } from 'react';

const StepView = ({ step, isConsistent }: { step: number, isConsistent: boolean }) => {
    const consistentClasses = "flex justify-end gap-2";
    const inconsistentClasses = step === 1 ? "flex justify-end gap-2" : "flex justify-between";

    return (
        <div className="bg-gray-800 p-6 rounded-lg w-full h-48 flex flex-col justify-between">
            <div>
                <p className="text-sm text-gray-400">Step {step} of 2</p>
                <h3 className="text-xl font-bold text-gray-200">
                    {step === 1 ? 'Shipping Details' : 'Payment Information'}
                </h3>
            </div>
            <div className={isConsistent ? consistentClasses : inconsistentClasses}>
                <button className="px-4 py-2 text-sm bg-gray-600 text-white rounded">
                    {step === 1 ? 'Cancel' : 'Back'}
                </button>
                 <button className="px-4 py-2 text-sm bg-cyan-600 text-white rounded">
                    {step === 1 ? 'Next' : 'Submit'}
                </button>
            </div>
        </div>
    );
};


export const ConsistencyVisual: React.FC = () => {
    const [isConsistent, setIsConsistent] = useState(true);
    const [step, setStep] = useState(1);
    
    return (
        <div className="w-full max-w-sm h-96 flex flex-col items-center justify-center p-4">
            <div className="w-full h-56 border-2 border-dashed border-gray-700 rounded-lg">
               <StepView step={step} isConsistent={isConsistent} />
            </div>
             <div className="my-4 flex items-center space-x-4">
                <span className={`text-sm ${!isConsistent ? 'text-white' : 'text-gray-500'}`}>Inconsistent</span>
                <button
                    onClick={() => setIsConsistent(!isConsistent)}
                    className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors bg-gray-600"
                    aria-label="Toggle consistency"
                >
                    <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${isConsistent ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
                <span className={`text-sm ${isConsistent ? 'text-white' : 'text-gray-500'}`}>Consistent</span>
            </div>
            <button onClick={() => setStep(s => s === 1 ? 2 : 1)} className="px-4 py-2 bg-gray-700 hover:bg-cyan-600 text-white rounded-lg">
                Toggle Step
            </button>
        </div>
    );
};