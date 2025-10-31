
import type React from 'react';

export interface DesignPrinciple {
  id: string;
  name: string;
  description: string;
  visual: React.FC;
}

export interface PrincipleSet {
  id: string;
  name: string;
  principles: DesignPrinciple[];
}
