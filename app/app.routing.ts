import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResearchComponent }      from './research/research.component';
import { ResearchDetailComponent } from './research/research-detail.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TeachingComponent } from './teaching/teaching.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    },

    {
        path: 'research',
        component: ResearchComponent
    },

    {
      path: 'detail/:id',
      component: ResearchDetailComponent
    },

    {
        path: 'our-team',
        component: OurTeamComponent
    },

    {
        path: 'contact-us',
        component: ContactUsComponent
    },

    {
        path: 'teaching',
        component: TeachingComponent
    },

    {
        path: 'index',
        component: HomeComponent
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
