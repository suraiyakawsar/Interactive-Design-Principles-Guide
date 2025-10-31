import React, { useState } from 'react';

const InputField = ({ label, type, value, onChange, error }: { label: string, type: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, error: string | null }) => (
    <div>
        <label className="text-sm text-gray-400">{label}</label>
        <input 
            type={type}
            value={value}
            onChange={onChange}
            className={`w-full p-2 mt-1 rounded bg-gray-900 border ${error ? 'border-red-500' : 'border-gray-600'} text-white`}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
);

export const SimpleErrorHandlingVisual: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string | null }>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const handleSubmit = () => {
        const newErrors: { [key: string]: string | null } = {};
        if (username.length < 3) {
            newErrors.username = "Username must be at least 3 characters.";
        }
        if (password.length < 8) {
            newErrors.password = "Password is too short (minimum 8 characters).";
        }
        setErrors(newErrors);
        setIsSubmitted(Object.keys(newErrors).length === 0);
    };

    return (
        <div className="w-full max-w-sm h-80 flex flex-col items-center justify-center p-4">
            <div className="w-full h-72 flex flex-col justify-center p-6 border-2 border-dashed border-gray-700 rounded-lg">
                {isSubmitted ? (
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-green-400">Success!</h3>
                        <p className="text-gray-400">Account created for "{username}".</p>
                        <button onClick={() => { setIsSubmitted(false); setUsername(''); setPassword(''); }} className="mt-4 text-cyan-400 underline">Reset</button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-gray-300">Create Account</h3>
                        <InputField label="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} error={errors.username} />
                        <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} error={errors.password} />
                        <button onClick={handleSubmit} className="w-full p-2 mt-2 bg-cyan-600 text-white rounded hover:bg-cyan-500">Submit</button>
                    </div>
                )}
            </div>
            <p className="mt-4 text-sm text-gray-500">Try to submit with invalid data.</p>
        </div>
    );
};