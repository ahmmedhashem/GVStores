import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-parteners',
  templateUrl: './parteners.component.html',
  styleUrls: ['./parteners.component.scss']
})
export class PartenersComponent implements OnInit {


  parteners:any = ["./assets/img/part1.png","./assets/img/part2.png","./assets/img/part3.png","./assets/img/part4.png","./assets/img/part5.png","./assets/img/part1.png","./assets/img/part2.png"]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true, 
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 3
      },
      740: {
        items: 5
      },
      940: {
        items: 5
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
