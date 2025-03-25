import { Component, ViewEncapsulation } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  selector: 'app-technologies',
  imports: [],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class TechnologiesComponent {

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
      allowTouchMove: true,
      touchEventsTarget: 'container',
    });
  }

}
