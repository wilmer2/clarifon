import { Component, ViewChild } from '@angular/core';
import { HeaderItem } from './header-item';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Swiper, Virtual, SwiperOptions } from 'swiper';

// install Swiper modules
SwiperCore.use([Virtual]);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @ViewChild('swiper', { static: false }) private swiper?: SwiperComponent;

  public items: HeaderItem[] = [
    {
      title: '30-DAY SATISFACTION GUARANTEE',
      source: 'assets/icons/fluent_checkmark-starburst-20-regular.svg',
      description: 'Check Gear',
    },
    {
      title: 'Free delivery on orders over $40.00',
      source: 'assets/icons/ph_truck-light.svg',
      description: 'Truck',
    },
    {
      title: '50.000+ HAPPY CUSTOMERS',
      source: 'assets/icons/mdi_cards-heart-outline.svg',
      description: 'Heart',
    },
    {
      title: '100% Money Back Guarantee',
      source: 'assets/icons/fluent_checkmark-starburst-20-regular.svg',
      description: 'Check Reload',
    },
  ];

  public config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 1,

    virtual: true,
  };

  public slideNext() {
    this.swiper?.swiperRef.slideNext(100);
  }

  public slidePrev() {
    this.swiper?.swiperRef.slidePrev(100);
  }
}
