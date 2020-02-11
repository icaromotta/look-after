import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public diapers = [{
    brand: 'ipsum',
    size: 'P',
    image: '../../../assets/fralda_p.png'
  }, {
    brand: 'consectetur',
    size: 'M',
    image: '../../../assets/fralda_m.png'
  }, {
    brand: 'adipiscing',
    size: 'G',
    image: '../../../assets/fralda_g.png'
  }, {
    brand: 'mollit',
    size: 'GG',
    image: '../../../assets/fralda_gg.png'
  }]
  public currentImage: string

  constructor() { }

  ngOnInit() {
    this.diapers
    this.rotate()
  }

  rotate() {

    // let count = 0

    // setInterval(() => {

    //   console.log(this.diapers[count++])

    //   if(count >= this.diapers.length) {
    //     count = 0
    //   }
    // }, 2000);
  }


}
