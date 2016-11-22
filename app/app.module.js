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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var research_service_1 = require('./shared/research.service');
var research_component_1 = require('./research/research.component');
var research_detail_component_1 = require('./research/research-detail.component');
var our_team_component_1 = require('./our-team/our-team.component');
var contact_us_component_1 = require('./contact-us/contact-us.component');
var teaching_component_1 = require('./teaching/teaching.component');
var home_component_1 = require('./home/home.component');
var angular2_swiper_1 = require('angular2-swiper');
var http_1 = require('@angular/http');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing,
                angular2_swiper_1.KSSwiperModule,
                http_1.HttpModule,
                http_1.JsonpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                research_component_1.ResearchComponent,
                research_detail_component_1.ResearchDetailComponent,
                our_team_component_1.OurTeamComponent,
                contact_us_component_1.ContactUsComponent,
                teaching_component_1.TeachingComponent,
                home_component_1.HomeComponent
            ],
            providers: [
                research_service_1.ResearchService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map