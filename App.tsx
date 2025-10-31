
import React, { useState, useCallback, useMemo } from 'react';
import Header from './components/Header';
import PrincipleSlide from './components/PrincipleSlide';
import Navigation from './components/Navigation';
import { PRINCIPLE_SETS } from './constants';
import type { DesignPrinciple } from './types';

const App: React.FC = () => {
  const [currentSetId, setCurrentSetId] = useState<string>(PRINCIPLE_SETS[0].id);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSet = useMemo(
    () => PRINCIPLE_SETS.find((s) => s.id === currentSetId) || PRINCIPLE_SETS[0],
    [currentSetId]
  );
  const currentPrinciples = currentSet.principles;

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentPrinciples.length);
  }, [currentPrinciples.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + currentPrinciples.length) % currentPrinciples.length);
  }, [currentPrinciples.length]);

  const handlePrincipleSelect = useCallback((id: string) => {
    const index = currentPrinciples.findIndex((p) => p.id === id);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  }, [currentPrinciples]);

  const handleSetSelect = useCallback((id: string) => {
    setCurrentSetId(id);
    setCurrentIndex(0); // Reset to the first principle of the new set
  }, []);

  const currentPrinciple: DesignPrinciple = currentPrinciples[currentIndex];

  return (
    <main className="h-screen w-screen overflow-hidden bg-gray-900 text-gray-100 flex flex-col items-center justify-center relative font-sans">
      <Header
        principleSets={PRINCIPLE_SETS}
        selectedSetId={currentSetId}
        onSetSelect={handleSetSelect}
        principles={currentPrinciples}
        selectedPrincipleId={currentPrinciple.id}
        onPrincipleSelect={handlePrincipleSelect}
      />
      <PrincipleSlide key={currentPrinciple.id} principle={currentPrinciple} />
      <Navigation onPrev={handlePrev} onNext={handleNext} />
    </main>
  );
};

export default App;
