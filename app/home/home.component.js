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
var core_1 = require('@angular/core');
//For Swiper Component
var core_2 = require('@angular/core');
var angular2_swiper_1 = require('angular2-swiper');
var HomeComponent = (function () {
    function HomeComponent() {
        this.example1SwipeOptions = {
            slidesPerView: 1,
            loop: true,
            spaceBetween: 0,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 3000
        };
    }
    HomeComponent.prototype.moveNext = function () {
        this.swiperContainer.swiper.slideNext();
    };
    HomeComponent.prototype.movePrev = function () {
        this.swiperContainer.swiper.slidePrev();
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        console.log(this.swiperContainer);
    };
    __decorate([
        core_2.ViewChild(angular2_swiper_1.KSSwiperContainer), 
        __metadata('design:type', angular2_swiper_1.KSSwiperContainer)
    ], HomeComponent.prototype, "swiperContainer", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'app/home/home.component.html',
            styleUrls: ['app/shared/swiper.css', 'css/style.css', 'app/home/home.component.css'],
            host: { 'class': 'ng-animate homeContainer' }
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map