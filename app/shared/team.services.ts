import { Injectable } from '@angular/core';
import { Team } from './team';
import { TEAM} from './data/team-items';
@Injectable()
export class TeamService {
  getTeamItems(): Promise<Team[]> {
    return Promise.resolve(TEAM);
  }
  getTeam(id: number): Promise<Team> {
      return this.getTeamItems()
          .then(teamItems => teamItems.find(team => team.id === id));
  }
}
