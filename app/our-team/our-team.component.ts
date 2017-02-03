import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../shared/team';
import { TeamRow } from '../shared/team-row';
import { TeamService} from '../shared/team.services';

//For Swiper Component
import {ViewChild, AfterViewInit} from '@angular/core';
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';

@Component({
    selector: 'our-team',
    templateUrl: 'app/our-team/our-team.component.html',
    styleUrls: ['app/shared/swiper.css', 'css/style.css', 'app/our-team/our-team-transition.css'],
      host: {'class' : 'ng-animate teamContainer'}
  })
export class OurTeamComponent implements AfterViewInit{
  // this is how you get access to the child component
  teamItems: Team[];
  teamRows: TeamRow[];
  selectedTeam: Team;
  @ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;

  example1SwipeOptions: any;

  constructor(private router: Router,
  private teamService: TeamService) {
    this.example1SwipeOptions = {
      slidesPerView: 1,
      loop: false,
      spaceBetween: 0,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    };
  }

  moveNext() {
    this.swiperContainer.swiper.slideNext();
  }

  movePrev() {
    this.swiperContainer.swiper.slidePrev();
  }
  getTeamItems(): void {
        this.teamService.getTeamItems().then(teamItems => {
            this.teamItems = teamItems;
            this.teamRows= new Array<TeamRow>();
            this.teamRows.push(new TeamRow);
            this.teamRows.push(new TeamRow);
            this.teamRows.push(new TeamRow);
            this.teamRows.push(new TeamRow);

            var teamRowCounter = 0;
            var myTeamCounter = 0;
            var moveTeamCounter = 1;
            console.log(this.teamRows[0]);
            this.teamRows[0].myTeam = new Array<Team>();

            for(var teamCounter = 0; teamCounter < this.teamItems.length; teamCounter++){
                this.teamRows[teamRowCounter].myTeam.push(this.teamItems[teamCounter]);
                myTeamCounter++;
                if(moveTeamCounter%4==0){
                    teamRowCounter++;
                    this.teamRows[teamRowCounter].myTeam = new Array<Team>();
                    myTeamCounter=0;
                }
                moveTeamCounter++;
            }
        });
      }

  ngOnInit(): void {
    this.getTeamItems();
  }

  ngAfterViewInit() {
    console.log(this.swiperContainer);
  }

  onSelect(team: Team): void {
    this.selectedTeam = team;
  }
}
