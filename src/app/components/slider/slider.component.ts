import { IMAGES_SIZES } from './../../constants/images-sizes';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [trigger('slideFade', [state('void', style({ opacity: 0 })), transition('void<=>*', [animate('1s')])])]
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[] = [];
  @Input() isBanner: boolean = false;

  currentSliderIndex: number = 0;
  readonly imagesSizes = IMAGES_SIZES;

  constructor() {}

  ngOnInit(): void {
    if (!this.isBanner) {
      setInterval(() => {
        this.currentSliderIndex = ++this.currentSliderIndex % this.items.length;
      }, 5000);
    }
  }
}