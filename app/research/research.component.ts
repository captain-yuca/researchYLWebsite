import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Research } from '../shared/research';
import { ResearchRow } from '../shared/research-row';
import { ResearchService} from '../shared/research.service';

//For Swiper Component
import {ViewChild, AfterViewInit} from '@angular/core';
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';

@Component({
    selector: 'research',
    templateUrl: 'app/research/research.component.html',
    styleUrls: ['css/style.css', 'app/shared/swiper.css', 'app/research/research-transition.css'],
    host: {'class' : 'ng-animate researchContainer'}
})
export class ResearchComponent implements AfterViewInit{
    researchItems: Research[];
    researchRows: ResearchRow[];
    selectedResearch: Research;
    @ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;

      example1SwipeOptions: any;






constructor(
  private router: Router,
  private researchService: ResearchService) {
    this.example1SwipeOptions = {
      slidesPerView: 1,
      loop: false,
      spaceBetween: 0,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    };
  }

    moveNext() {
      this.swiperContainer.swiper.slideNext();
    }

    movePrev() {
      this.swiperContainer.swiper.slidePrev();
    }
    getResearchItems(): void {
          this.researchService.getResearchItems().then(researchItems => {
              this.researchItems = researchItems;
              this.researchRows= new Array<ResearchRow>();
              this.researchRows.push(new ResearchRow);
              this.researchRows.push(new ResearchRow);
              this.researchRows.push(new ResearchRow);
              this.researchRows.push(new ResearchRow);

              var researchRowCounter = 0;
              var myResearchCounter = 0;
              var moveCounter = 1;
              console.log(this.researchRows[0]);
              this.researchRows[0].myResearch = new Array<Research>();

              for(var researchCounter = 0; researchCounter < this.researchItems.length; researchCounter++){
                  this.researchRows[researchRowCounter].myResearch.push(this.researchItems[researchCounter]);
                  myResearchCounter++;
                  if(moveCounter%3==0){
                      researchRowCounter++;
                      this.researchRows[researchRowCounter].myResearch = new Array<Research>();
                      myResearchCounter=0;
                  }
                  moveCounter++;
              }
          });
        }

  ngOnInit(): void {
    this.getResearchItems();
  }
  ngAfterViewInit() {
    console.log(this.swiperContainer);
  }
  onSelect(research: Research): void {
    this.selectedResearch = research;
  }
}
