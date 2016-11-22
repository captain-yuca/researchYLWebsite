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
var research_items_1 = require('./data/research-items');
var ResearchService = (function () {
    function ResearchService() {
    }
    ResearchService.prototype.getResearchItems = function () {
        return Promise.resolve(research_items_1.RESEARCH);
    };
    ResearchService.prototype.getResearch = function (id) {
        return (this.getResearchItems()
            .then(function (researchItems) { return researchItems.find(function (research) { return research.id === id; }); }));
    };
    ResearchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ResearchService);
    return ResearchService;
}());
exports.ResearchService = ResearchService;
//# sourceMappingURL=research.service.js.map