// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { ResearchService } from '../shared/research.service';
import { Research } from '../shared/research';

@Component({
    selector: 'research-details',
    templateUrl: 'app/research/research-detail.component.html',
    styleUrls: ['css/style.css']

})
export class ResearchDetailComponent implements OnInit {

    constructor(
        private researchService: ResearchService,
        private route: ActivatedRoute,
        private location: Location
    ) { }
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.researchService.getResearch(id)
                .then(research => this.research = research);
        });
    }
    goBack(): void {
        this.location.back();
    }

    @Input()
    research: Research;
}
