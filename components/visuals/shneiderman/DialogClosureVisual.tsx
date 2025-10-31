import React, { useState } from 'react';

const steps = ['Shipping', 'Payment', 'Review', 'Complete'];

export const DialogClosureVisual: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    const handlePrev = () => setCurrentStep(prev => Math.max(prev - 1, 0));
    const handleReset = () => setCurrentStep(0);

    const isComplete = currentStep === steps.length - 1;

    return (
        <div className="w-full max-w-md h-80 flex flex-col items-center justify-center p-4">
            <div className="w-full h-64 flex flex-col justify-between items-center p-6 border-2 border-dashed border-gray-700 rounded-lg">
                {/* Step Indicator */}
                <div className="w-full mb-6">
                    <div className="flex items-center justify-between">
                        {steps.map((step, index) => (
                            <React.Fragment key={step}>
                                <div className="flex flex-col items-center">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${index <= currentStep ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-400'}`}>
                                        {index < currentStep ? '✓' : index + 1}
                                    </div>
                                    <p className={`mt-1 text-xs ${index <= currentStep ? 'text-gray-300' : 'text-gray-500'}`}>{step}</p>
                                </div>
                                {index < steps.length - 1 && <div className={`flex-1 h-1 mx-2 transition-colors ${index < currentStep ? 'bg-cyan-500' : 'bg-gray-700'}`}></div>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col items-center justify-center text-center">
                    {isComplete ? (
                        <>
                            <h3 className="text-2xl font-bold text-green-400">Thank You!</h3>
                            <p className="text-gray-400">Your order has been placed.</p>
                        </>
                    ) : (
                        <>
                             <h3 className="text-2xl font-bold text-gray-200">{steps[currentStep]} Information</h3>
                             <p className="text-gray-500">Content for the {steps[currentStep].toLowerCase()} step goes here.</p>
                        </>
                    )}
                </div>

                {/* Actions */}
                <div className="flex justify-between w-full mt-6">
                    {isComplete ? (
                         <button onClick={handleReset} className="w-full px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-500">Start Over</button>
                    ) : (
                        <>
                            <button onClick={handlePrev} disabled={currentStep === 0} className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50">Previous</button>
                            <button onClick={handleNext} className="px-4 py-2 bg-cyan-600 text-white rounded">{currentStep === steps.length - 2 ? 'Confirm' : 'Next'}</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};