"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var team_row_1 = require("../shared/team-row");
var team_services_1 = require("../shared/team.services");
//For Swiper Component
var core_2 = require("@angular/core");
var angular2_swiper_1 = require("angular2-swiper");
var OurTeamComponent = (function () {
    function OurTeamComponent(router, teamService) {
        this.router = router;
        this.teamService = teamService;
        this.example1SwipeOptions = {
            slidesPerView: 1,
            loop: false,
            spaceBetween: 0,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'
        };
    }
    OurTeamComponent.prototype.moveNext = function () {
        this.swiperContainer.swiper.slideNext();
    };
    OurTeamComponent.prototype.movePrev = function () {
        this.swiperContainer.swiper.slidePrev();
    };
    OurTeamComponent.prototype.getTeamItems = function () {
        var _this = this;
        this.teamService.getTeamItems().then(function (teamItems) {
            _this.teamItems = teamItems;
            _this.teamRows = new Array();
            _this.teamRows.push(new team_row_1.TeamRow);
            _this.teamRows.push(new team_row_1.TeamRow);
            _this.teamRows.push(new team_row_1.TeamRow);
            _this.teamRows.push(new team_row_1.TeamRow);
            var teamRowCounter = 0;
            var myTeamCounter = 0;
            var moveTeamCounter = 1;
            console.log(_this.teamRows[0]);
            _this.teamRows[0].myTeam = new Array();
            for (var teamCounter = 0; teamCounter < _this.teamItems.length; teamCounter++) {
                _this.teamRows[teamRowCounter].myTeam.push(_this.teamItems[teamCounter]);
                myTeamCounter++;
                if (moveTeamCounter % 3 == 0) {
                    teamRowCounter++;
                    _this.teamRows[teamRowCounter].myTeam = new Array();
                    myTeamCounter = 0;
                }
                moveTeamCounter++;
            }
        });
    };
    OurTeamComponent.prototype.ngOnInit = function () {
        this.getTeamItems();
    };
    OurTeamComponent.prototype.ngAfterViewInit = function () {
        console.log(this.swiperContainer);
    };
    OurTeamComponent.prototype.onSelect = function (team) {
        this.selectedTeam = team;
    };
    return OurTeamComponent;
}());
__decorate([
    core_2.ViewChild(angular2_swiper_1.KSSwiperContainer),
    __metadata("design:type", angular2_swiper_1.KSSwiperContainer)
], OurTeamComponent.prototype, "swiperContainer", void 0);
OurTeamComponent = __decorate([
    core_1.Component({
        selector: 'our-team',
        templateUrl: 'app/our-team/our-team.component.html',
        styleUrls: ['app/shared/swiper.css', 'css/style.css', 'app/our-team/our-team-transition.css'],
        host: { 'class': 'ng-animate teamContainer' }
    }),
    __metadata("design:paramtypes", [router_1.Router,
        team_services_1.TeamService])
], OurTeamComponent);
exports.OurTeamComponent = OurTeamComponent;
//# sourceMappingURL=our-team.component.js.map