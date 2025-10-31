import React, { useState } from 'react';

const Header = ({ isConventional }: { isConventional: boolean }) => {
  const commonClasses = "flex items-center justify-between w-full h-16 px-4 bg-gray-800 rounded-lg";
  
  const Logo = () => <div className="text-lg font-bold text-white">LOGO</div>;
  const Nav = () => <nav className="hidden sm:flex gap-4 text-gray-400 text-sm"><a>Home</a><a>Products</a><a>About</a></nav>;
  const Icons = () => (
    <div className="flex items-center gap-4 text-white">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
    </div>
  );

  if (isConventional) {
    return (
      <header className={commonClasses}>
        <Logo />
        <Nav />
        <Icons />
      </header>
    );
  } else {
    return (
      <header className={`${commonClasses} flex-col h-24 sm:h-16 sm:flex-row`}>
        <Nav />
        <div className="flex justify-between w-full sm:w-auto sm:gap-8">
          <Icons />
          <Logo />
        </div>
      </header>
    );
  }
};

export const JakobsLawVisual: React.FC = () => {
    const [isConventional, setIsConventional] = useState(true);

    return (
        <div className="w-full max-w-lg h-72 flex flex-col items-center justify-center p-4">
            <div className="w-full h-48 flex flex-col justify-center items-center p-4 border-2 border-dashed border-gray-700 rounded-lg">
                <Header isConventional={isConventional} />
            </div>
            <div className="mt-4 flex items-center space-x-4">
                <span className={`text-sm ${!isConventional ? 'text-white' : 'text-gray-500'}`}>Unconventional</span>
                <button
                    onClick={() => setIsConventional(!isConventional)}
                    className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors bg-gray-600"
                    aria-label="Toggle layout"
                >
                    <span
                        className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${isConventional ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                </button>
                <span className={`text-sm ${isConventional ? 'text-white' : 'text-gray-500'}`}>Conventional</span>
            </div>
        </div>
    );
};
