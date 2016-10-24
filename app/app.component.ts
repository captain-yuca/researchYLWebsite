import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Research } from './shared/research';
import { ResearchService} from './shared/research.service';
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
    //styleUrls: []

})
export class AppComponent {
  researchItems: Research[];
  selectedResearch: Research;
  constructor(
    private router: Router,
    private researchService: ResearchService) {}

  getResearchItems(): void {
    this.researchService.getResearchItems().then(researchItems => this.researchItems = researchItems);
  }

  ngOnInit(): void {
    this.getResearchItems();
  }

  onSelect(research: Research): void {
    this.selectedResearch = research;
    this.router.navigate(['/detail', this.selectedResearch.id]);
  }
}
