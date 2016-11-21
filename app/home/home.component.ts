import { Component} from '@angular/core';
import { Router } from '@angular/router';

//For Swiper Component
import {ViewChild, AfterViewInit} from '@angular/core';
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.component.html',
    styleUrls: ['app/shared/swiper.css', 'css/style.css', 'app/home/home-transition.css'],
    host: {'class' : 'ng-animate homeContainer'}
})
export class HomeComponent implements AfterViewInit{
    // this is how you get access to the child component
    @ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;

    example1SwipeOptions: any;

    constructor() {
      this.example1SwipeOptions = {
        slidesPerView: 1,
        loop: false,
        spaceBetween: 0,
        pagination: '.swiper-pagination',
        paginationClickable: true
      };
    }

    moveNext() {
      this.swiperContainer.swiper.slideNext();
    }

    movePrev() {
      this.swiperContainer.swiper.slidePrev();
    }

    ngAfterViewInit() {
      console.log(this.swiperContainer);
    }
}
