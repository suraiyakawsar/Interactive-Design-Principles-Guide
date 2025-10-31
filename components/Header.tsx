
import React from 'react';
import type { DesignPrinciple, PrincipleSet } from '../types';

interface HeaderProps {
  principleSets: PrincipleSet[];
  selectedSetId: string;
  onSetSelect: (id: string) => void;
  principles: DesignPrinciple[];
  selectedPrincipleId: string;
  onPrincipleSelect: (id: string) => void;
}

const DropdownArrow: React.FC = () => (
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </div>
);

const Header: React.FC<HeaderProps> = ({
  principleSets,
  selectedSetId,
  onSetSelect,
  principles,
  selectedPrincipleId,
  onPrincipleSelect,
}) => {
  return (
    <header className="absolute top-0 left-0 w-full p-4 md:p-8 z-10 flex justify-between items-center">
      <h1 className="text-xl md:text-2xl font-bold text-gray-200 tracking-wide hidden sm:block">Design Principles</h1>
      <div className="flex items-center gap-2 md:gap-4">
        <div className="relative">
          <select
            value={selectedSetId}
            onChange={(e) => onSetSelect(e.target.value)}
            className="bg-gray-800 border border-gray-700 text-gray-200 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 appearance-none cursor-pointer"
            aria-label="Select design principle set"
          >
            {principleSets.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
          <DropdownArrow />
        </div>
        <div className="relative">
          <select
            value={selectedPrincipleId}
            onChange={(e) => onPrincipleSelect(e.target.value)}
            className="bg-gray-800 border border-gray-700 text-gray-200 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 appearance-none cursor-pointer"
             aria-label="Select design principle"
          >
            {principles.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
          <DropdownArrow />
        </div>
      </div>
    </header>
  );
};

export default Header;
