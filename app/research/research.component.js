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
var research_row_1 = require("../shared/research-row");
var research_service_1 = require("../shared/research.service");
//For Swiper Component
var core_2 = require("@angular/core");
var angular2_swiper_1 = require("angular2-swiper");
var ResearchComponent = (function () {
    function ResearchComponent(router, researchService) {
        this.router = router;
        this.researchService = researchService;
        this.example1SwipeOptions = {
            slidesPerView: 1,
            loop: false,
            spaceBetween: 0,
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'
        };
    }
    ResearchComponent.prototype.moveNext = function () {
        this.swiperContainer.swiper.slideNext();
    };
    ResearchComponent.prototype.movePrev = function () {
        this.swiperContainer.swiper.slidePrev();
    };
    ResearchComponent.prototype.getResearchItems = function () {
        var _this = this;
        this.researchService.getResearchItems().then(function (researchItems) {
            _this.researchItems = researchItems;
            _this.researchRows = new Array();
            _this.researchRows.push(new research_row_1.ResearchRow);
            _this.researchRows.push(new research_row_1.ResearchRow);
            _this.researchRows.push(new research_row_1.ResearchRow);
            _this.researchRows.push(new research_row_1.ResearchRow);
            var researchRowCounter = 0;
            var myResearchCounter = 0;
            var moveCounter = 1;
            console.log(_this.researchRows[0]);
            _this.researchRows[0].myResearch = new Array();
            for (var researchCounter = 2; researchCounter < _this.researchItems.length; researchCounter++) {
                _this.researchRows[researchRowCounter].myResearch.push(_this.researchItems[researchCounter]);
                myResearchCounter++;
                if (moveCounter % 3 == 0) {
                    researchRowCounter++;
                    _this.researchRows[researchRowCounter].myResearch = new Array();
                    myResearchCounter = 0;
                }
                moveCounter++;
            }
        });
    };
    ResearchComponent.prototype.ngOnInit = function () {
        this.getResearchItems();
    };
    ResearchComponent.prototype.ngAfterViewInit = function () {
        console.log(this.swiperContainer);
    };
    ResearchComponent.prototype.onSelect = function (research) {
        this.selectedResearch = research;
        this.router.navigate(['/detail', this.selectedResearch.id]);
    };
    return ResearchComponent;
}());
__decorate([
    core_2.ViewChild(angular2_swiper_1.KSSwiperContainer),
    __metadata("design:type", angular2_swiper_1.KSSwiperContainer)
], ResearchComponent.prototype, "swiperContainer", void 0);
ResearchComponent = __decorate([
    core_1.Component({
        selector: 'research',
        templateUrl: 'app/research/research.component.html',
        styleUrls: ['css/style.css', 'app/shared/swiper.css', 'app/research/research-transition.css'],
        host: { 'class': 'ng-animate researchContainer' }
    }),
    __metadata("design:paramtypes", [router_1.Router,
        research_service_1.ResearchService])
], ResearchComponent);
exports.ResearchComponent = ResearchComponent;
//# sourceMappingURL=research.component.js.map