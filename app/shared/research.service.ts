import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Research } from './research';
import { RESEARCH } from './data/research-items';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';


@Injectable()
export class ResearchService {
  private researchUrl = 'http://localhost:3008/research';  // URL to web api

  constructor(private http: Http) { }

  getResearchItems(): Promise<Research[]> {
    return this.http.get(this.researchUrl)
               .toPromise()
               .then(response => response.json() as Research[]);
  }
  getResearch(id: number): Promise<Research> {
      return this.getResearchItems()
          .then(researchItems => researchItems.find(research => research.id === id));
  }
}
