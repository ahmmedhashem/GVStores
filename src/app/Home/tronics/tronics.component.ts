import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

declare var $:any;

@Component({
  selector: 'app-tronics',
  templateUrl: './tronics.component.html',
  styleUrls: ['./tronics.component.scss']
})
export class TronicsComponent implements OnInit {

  TRslides:any = ["./assets/img/gvslide1.png","./assets/img/gvslide1.png","./assets/img/gvslide1.png","./assets/img/gvslide1.png"]
  Lslides:any = ["./assets/img/cvlearnslide.png","./assets/img/cvlearnslide.png","./assets/img/cvlearnslide.png","./assets/img/cvlearnslide.png"]


  GVTOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
  
    navText: ['<img src="./assets/img/larrow.png"> ', '<img src="./assets/img/rarrow.png">'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }


  


  constructor() { }

  ngOnInit(): void {

    


    

 
  



  }

}
