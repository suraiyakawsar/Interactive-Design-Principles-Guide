import React, { useState } from 'react';

const WeatherInfo = ({ label, value, isPrioritized }: { label: string, value: string, isPrioritized: boolean }) => {
    const sizeClass = isPrioritized ? 'text-sm' : 'text-base';
    return (
        <div className="text-center">
            <p className={`${sizeClass} text-gray-400`}>{label}</p>
            <p className={`${sizeClass} font-semibold text-gray-200`}>{value}</p>
        </div>
    );
};

export const PrioritizeContentVisual: React.FC = () => {
    const [isPrioritized, setIsPrioritized] = useState(false);
    
    const tempClasses = `font-extrabold text-cyan-400 transition-all duration-300 ${isPrioritized ? 'text-8xl' : 'text-5xl'}`;
    const locationClasses = `font-semibold text-gray-300 transition-all duration-300 ${isPrioritized ? 'text-2xl' : 'text-xl'}`;

    return (
        <div className="w-full max-w-sm h-80 flex flex-col items-center justify-center p-4">
            <div className={`w-full h-64 flex flex-col justify-between items-center p-6 border-2 border-dashed border-gray-700 rounded-lg transition-all duration-300 ${isPrioritized ? 'bg-gray-800' : 'bg-transparent'}`}>
                <div className="text-center">
                    <h3 className={locationClasses}>San Francisco</h3>
                    <p className="text-gray-400">Partly Cloudy</p>
                </div>
                
                <div className={tempClasses}>
                    65°
                </div>

                <div className={`w-full grid grid-cols-3 gap-2 transition-opacity duration-300 ${isPrioritized ? 'opacity-80' : 'opacity-100'}`}>
                    <WeatherInfo label="Humidity" value="72%" isPrioritized={isPrioritized} />
                    <WeatherInfo label="Wind" value="8 mph" isPrioritized={isPrioritized} />
                    <WeatherInfo label="UV Index" value="High" isPrioritized={isPrioritized} />
                </div>
            </div>
             <div className="mt-4 flex items-center space-x-4">
                <span className={`text-sm ${!isPrioritized ? 'text-white' : 'text-gray-500'}`}>Unprioritized</span>
                <button
                    onClick={() => setIsPrioritized(!isPrioritized)}
                    className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors bg-gray-600"
                >
                    <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${isPrioritized ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
                <span className={`text-sm ${isPrioritized ? 'text-white' : 'text-gray-500'}`}>Prioritized</span>
            </div>
        </div>
    );
};