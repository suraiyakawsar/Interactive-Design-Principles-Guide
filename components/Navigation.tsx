
import React from 'react';

interface NavigationProps {
  onPrev: () => void;
  onNext: () => void;
}

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg className={`w-8 h-8 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
  </svg>
);

const Navigation: React.FC<NavigationProps> = ({ onPrev, onNext }) => {
  return (
    <>
      <button
        onClick={onPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-4 md:p-8 text-gray-600 hover:text-white transition-colors duration-300 opacity-50 hover:opacity-100 z-10"
        aria-label="Previous principle"
      >
        <ArrowIcon className="transform rotate-180" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-4 md:p-8 text-gray-600 hover:text-white transition-colors duration-300 opacity-50 hover:opacity-100 z-10"
        aria-label="Next principle"
      >
        <ArrowIcon />
      </button>
    </>
  );
};

export default Navigation;
