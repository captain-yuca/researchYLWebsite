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
// Keep the Input import for now, we'll remove it later:
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
require('rxjs/add/operator/switchMap');
var research_service_1 = require('../shared/research.service');
var ResearchDetailComponent = (function () {
    function ResearchDetailComponent(researchService, route, location) {
        this.researchService = researchService;
        this.route = route;
        this.location = location;
    }
    ResearchDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.researchService.getResearch(+params['id']); })
            .subscribe(function (research) { return _this.research = research; });
    };
    ResearchDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ResearchDetailComponent = __decorate([
        core_1.Component({
            selector: 'research-details',
            templateUrl: 'app/research/research-detail.component.html',
            styleUrls: ['css/style.css']
        }), 
        __metadata('design:paramtypes', [research_service_1.ResearchService, router_1.ActivatedRoute, common_1.Location])
    ], ResearchDetailComponent);
    return ResearchDetailComponent;
}());
exports.ResearchDetailComponent = ResearchDetailComponent;
//# sourceMappingURL=research-detail.component.js.map