import { Injectable } from '@angular/core';
import { Research } from './research';
import { RESEARCH } from './data/research-items';
@Injectable()
export class ResearchService {
  getResearchItems(): Promise<Research[]> {
    return Promise.resolve(RESEARCH);
  }
  getResearch(id: number): Promise<Research> {
      return this.getResearchItems()
          .then(researchItems => researchItems.find(research => research.id === id));
  }
}
