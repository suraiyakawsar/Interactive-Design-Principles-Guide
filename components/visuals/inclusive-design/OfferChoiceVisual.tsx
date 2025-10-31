import React, { useState } from 'react';

const CalendarInput = () => (
    <div>
        <label htmlFor="date-picker" className="block text-sm text-gray-400 mb-2">Select a date from the calendar:</label>
        <input 
            type="date" 
            id="date-picker"
            className="w-full p-2 rounded bg-gray-900 border border-gray-600 text-white"
        />
    </div>
);

const NaturalLanguageInput = () => (
    <div>
        <label htmlFor="text-input" className="block text-sm text-gray-400 mb-2">Or describe the date:</label>
        <input 
            type="text" 
            id="text-input"
            placeholder="e.g., 'Next Friday' or 'in 2 weeks'"
            className="w-full p-2 rounded bg-gray-900 border border-gray-600 text-white placeholder-gray-500"
        />
    </div>
);


export const OfferChoiceVisual: React.FC = () => {
    const [choice, setChoice] = useState<'calendar' | 'text'>('calendar');

    return (
        <div className="w-full max-w-sm h-80 flex flex-col items-center justify-center p-4">
            <div className="w-full h-64 flex flex-col justify-center p-6 border-2 border-dashed border-gray-700 rounded-lg">
                <h3 className="text-lg font-bold text-gray-300 mb-4">Schedule Appointment</h3>
                <div className="mb-4">
                    <div className="flex border border-gray-700 rounded-lg p-1">
                        <button 
                            onClick={() => setChoice('calendar')} 
                            className={`w-1/2 p-1 text-sm rounded ${choice === 'calendar' ? 'bg-cyan-600 text-white' : 'text-gray-400'}`}
                        >
                            Calendar
                        </button>
                        <button 
                            onClick={() => setChoice('text')} 
                             className={`w-1/2 p-1 text-sm rounded ${choice === 'text' ? 'bg-cyan-600 text-white' : 'text-gray-400'}`}
                        >
                            Text Input
                        </button>
                    </div>
                </div>
                {choice === 'calendar' ? <CalendarInput /> : <NaturalLanguageInput />}
            </div>
            <p className="mt-4 text-sm text-gray-500 text-center">Different users may prefer different input methods.</p>
        </div>
    );
};