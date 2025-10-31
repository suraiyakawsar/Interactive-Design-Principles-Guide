import React, { useState } from 'react';

const UnclearForm = () => {
    const [hasError, setHasError] = useState(false);
    return (
        <div className="w-full space-y-3">
            <input type="text" placeholder="Your email" className="w-full p-2 bg-gray-900 border border-gray-600 rounded placeholder-gray-500" />
            <input type="password" placeholder="Password" className={`w-full p-2 bg-gray-900 border rounded ${hasError ? 'border-red-500' : 'border-gray-600'}`} />
            <button onClick={() => setHasError(true)} className="w-full p-2 bg-cyan-800 text-white/50 rounded">Submit</button>
            {hasError && <p className="text-red-500 text-sm text-center">An error occurred.</p>}
        </div>
    );
}

const ClearForm = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState<string | null>(null);
    
    const handleSubmit = () => {
        if (!email.includes('@')) {
            setError('Please enter a valid email address.');
        } else {
            setError(null);
            alert('Submitted!');
        }
    }

    return (
        <div className="w-full space-y-3">
            <div>
                <label htmlFor="email-clear" className="block text-sm text-gray-400 mb-1">Your email</label>
                <input id="email-clear" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={`w-full p-2 bg-gray-900 border rounded ${error ? 'border-red-500' : 'border-gray-600'}`} />
            </div>
             <div>
                <label htmlFor="pw-clear" className="block text-sm text-gray-400 mb-1">Password</label>
                <input id="pw-clear" type="password" className="w-full p-2 bg-gray-900 border border-gray-600 rounded" />
            </div>
            <button onClick={handleSubmit} className="w-full p-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded">Submit</button>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </div>
    )
}

export const UnderstandableVisual: React.FC = () => {
    const [isClear, setIsClear] = useState(false);

    return (
        <div className="w-full max-w-sm h-96 flex flex-col items-center justify-center p-4">
            <div className="w-full h-72 flex flex-col justify-center p-6 border-2 border-dashed border-gray-700 rounded-lg">
                <h3 className="text-lg font-bold text-gray-300 mb-4 text-center">Login</h3>
                {isClear ? <ClearForm /> : <UnclearForm />}
            </div>
            <div className="mt-4 flex items-center space-x-4">
                <span className={`text-sm ${!isClear ? 'text-white' : 'text-gray-500'}`}>Unclear</span>
                <button
                    onClick={() => setIsClear(!isClear)}
                    className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors bg-gray-600"
                    aria-label="Toggle form type"
                >
                    <span
                        className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${isClear ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                </button>
                <span className={`text-sm ${isClear ? 'text-white' : 'text-gray-500'}`}>Clear</span>
            </div>
        </div>
    );
};