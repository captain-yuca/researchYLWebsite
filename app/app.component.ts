import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Research } from './shared/research';
import { Team } from './shared/team';
import { TeamService } from './shared/team.services';
import { ResearchService} from './shared/research.service';
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']

})
export class AppComponent {
  researchItems: Research[];
  selectedResearch: Research;
  teamItems: Team[];
  selectedTeam: Team;

  constructor(
    private router: Router,
    private researchService: ResearchService,
    private teamService: TeamService){}

  getResearchItems(): void {
    this.researchService.getResearchItems().then(researchItems => this.researchItems = researchItems);
  }

  getTeamItems(): void {
    this.teamService.getTeamItems().then(teamItems => this.teamItems = teamItems);
  }

  ngOnInit(): void {
    this.getResearchItems();
    this.getTeamItems();
  }

  onSelectResearch(research: Research): void {
    this.selectedResearch = research;
    this.router.navigate(['/detail', this.selectedResearch.id]);
  }

  onSelectTeam(team: Team): void {
    this.selectedTeam = team;
    this.router.navigate(['/detail', this.selectedTeam.id]);
  }
}
