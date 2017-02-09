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
//For Swiper Component
var core_2 = require("@angular/core");
var angular2_swiper_1 = require("angular2-swiper");
var ContactUsComponent = (function () {
    function ContactUsComponent() {
        this.example1SwipeOptions = {
            slidesPerView: 1,
            loop: false,
            spaceBetween: 0
        };
    }
    ContactUsComponent.prototype.moveNext = function () {
        this.swiperContainer.swiper.slideNext();
    };
    ContactUsComponent.prototype.movePrev = function () {
        this.swiperContainer.swiper.slidePrev();
    };
    ContactUsComponent.prototype.ngAfterViewInit = function () {
        console.log(this.swiperContainer);
    };
    return ContactUsComponent;
}());
__decorate([
    core_2.ViewChild(angular2_swiper_1.KSSwiperContainer),
    __metadata("design:type", angular2_swiper_1.KSSwiperContainer)
], ContactUsComponent.prototype, "swiperContainer", void 0);
ContactUsComponent = __decorate([
    core_1.Component({
        selector: 'contact-us',
        templateUrl: 'app/contact-us/contact-us.component.html',
        styleUrls: ['app/shared/swiper.css', 'css/style.css']
    }),
    __metadata("design:paramtypes", [])
], ContactUsComponent);
exports.ContactUsComponent = ContactUsComponent;
//# sourceMappingURL=contact-us.component.js.map