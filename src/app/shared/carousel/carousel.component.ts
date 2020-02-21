import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {

  public diapers = [{
    id: 1,
    brand: 'ipsum',
    size: 'P',
    image: '../../../assets/fralda_p.png'
  }, {
    id: 2,
    brand: 'consectetur',
    size: 'M',
    image: '../../../assets/fralda_m.png'
  }, {
    id: 5,
    brand: 'adipiscing',
    size: 'G',
    image: '../../../assets/fralda_g.png'
  }, {
    id: 6,
    brand: 'mollit',
    size: 'GG',
    image: '../../../assets/fralda_gg.png'
  }]
  public currentImage: string
  public timerInterval: any;
  public count = 0

  constructor() { }

  ngOnInit() {
    this.count
    this.currentImage = this.diapers[0].image
    this.rotate()
  }

  pouseTimer() {
    clearInterval(this.timerInterval)
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval)
  }

  rotate() {
    this.timerInterval = setInterval(() => {
      this.currentImage = this.diapers[this.count++].image
      if (this.count >= this.diapers.length) {
        this.count = 0
      }
    }, 2000);
  }
}
