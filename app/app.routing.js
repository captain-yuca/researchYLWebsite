"use strict";
var router_1 = require("@angular/router");
var research_component_1 = require("./research/research.component");
var research_detail_component_1 = require("./research/research-detail.component");
var our_team_component_1 = require("./our-team/our-team.component");
var contact_us_component_1 = require("./contact-us/contact-us.component");
var teaching_component_1 = require("./teaching/teaching.component");
var home_component_1 = require("./home/home.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    },
    {
        path: 'research',
        component: research_component_1.ResearchComponent
    },
    {
        path: 'detail/:id',
        component: research_detail_component_1.ResearchDetailComponent
    },
    {
        path: 'our-team',
        component: our_team_component_1.OurTeamComponent
    },
    {
        path: 'contact-us',
        component: contact_us_component_1.ContactUsComponent
    },
    {
        path: 'teaching',
        component: teaching_component_1.TeachingComponent
    },
    {
        path: 'index',
        component: home_component_1.HomeComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map