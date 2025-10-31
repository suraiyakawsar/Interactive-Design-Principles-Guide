
import React from 'react';
import type { DesignPrinciple } from '../types';

interface PrincipleSlideProps {
  principle: DesignPrinciple;
}

const PrincipleSlide: React.FC<PrincipleSlideProps> = ({ principle }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 animate-fade-in">
      <div className="flex-grow flex items-center justify-center w-full max-w-5xl">
        <principle.visual />
      </div>
      <div className="w-full max-w-3xl text-center p-4 md:p-8">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">{principle.name}</h2>
        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">{principle.description}</p>
      </div>
    </div>
  );
};

// Add fade-in animation to tailwind config or a style tag if not using a config file.
// For this single-file setup, a style tag in index.html would be one way, but for purity, let's define it here with a comment.
// We'll rely on a small trick. Create a style element in the component.
const AnimationStyles = () => (
  <style>
    {`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fadeIn 0.7s ease-in-out forwards;
      }
    `}
  </style>
);

const PrincipleSlideWithAnimation: React.FC<PrincipleSlideProps> = (props) => (
    <>
        <AnimationStyles />
        <PrincipleSlide {...props} />
    </>
);

export default PrincipleSlideWithAnimation;
