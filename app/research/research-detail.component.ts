// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';



import { ResearchService } from '../shared/research.service';
import { Research } from '../shared/research';

@Component({
    selector: 'research-details',
    templateUrl: 'app/research/research-detail.component.html',
    styleUrls: ['css/style.css']

})
export class ResearchDetailComponent implements OnInit {
    research: Research;
    constructor(
        private researchService: ResearchService,
        private route: ActivatedRoute,
        private location: Location
    ) { }
    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => this.researchService.getResearch(+params['id']))
        .subscribe(research => {this.research = research;
            console.log(research);
        });
    }
}
