import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }   from './app.component';
import { routing } from './app.routing';
import { ResearchService} from './shared/research.service';
import { ResearchComponent} from './research/research.component';
import { ResearchDetailComponent} from './research/research-detail.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TeachingComponent } from './teaching/teaching.component';
import { HomeComponent} from './home/home.component';
import {KSSwiperModule} from 'angular2-swiper';
import { TeamService } from './shared/team.services';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        KSSwiperModule
    ],
    declarations: [
        AppComponent,
        ResearchComponent,
        ResearchDetailComponent,
        OurTeamComponent,
        ContactUsComponent,
        TeachingComponent,
        HomeComponent


    ],
    providers: [
        ResearchService,
        TeamService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
