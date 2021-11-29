import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from 'src/app/ui-components/product/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService) { }
  // color= true
  changeImgSrc = false
  setClass:string ='product product-10 text-center'
  ngOnInit(): void {
  }
  customOptionsProducts: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin: 20,
    navSpeed: 400,
    navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
    responsive: {
      0: {
        "items": 1,
      },
      480: {
        "items": 2
      },
      600:{
        "items": 3
      },
      768: {
        "items": 3
      },
      992: {
        "items": 4
      },
      1200: {
        "items": 4,
      },
      
    },
  }
  customOptionsHerbs: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin: 20,
    navSpeed: 400,
    navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
    responsive: {
      0: {
        "items": 1
      },
      480: {
        "items": 2
      },
      600:{
        "items": 4
      },
      768: {
        "items": 5
      },
      992: {
        "items": 6
      },
      1200: {
        "items": 6,
      },
      
    },
  }
  customOptionsBrand: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin: 20,
    navSpeed: 400,
    navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
    responsive: {
      0: {
        "items": 2
      },
      480: {
        "items": 3
      },
      600:{
        "items": 5
      },
      768: {
        "items": 6
      },
      992: {
        "items": 6
      },
      1200: {
        "items": 7,
      }
    },
  }
  customOptionsPresence: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin: 20,
    navSpeed: 400,
    navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
    responsive: {
      0: {
        "items": 2
      },
      480: {
        "items": 2
      },
      600:{
        "items": 3
      },
      768: {
        "items": 3
      },
      992: {
        "items": 4
      },
      1200: {
        "items": 4,
      }
    },
  }
  customOptionsArticle: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin: 20,
    navSpeed: 400,
    navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
    responsive: {
      0: {
        "items": 1
      },
      480: {
        "items": 1
      },
      600:{
        "items": 2
      },
      768: {
        "items": 2
      },
      992: {
        "items": 3
      },
      1200: {
        "items": 3,
      }
    },
  }
  customOptionshome: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin: 0,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    navSpeed: 5000,
    navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
    responsive: {
      0: {
        "items": 1
      },
      480: {
        "items": 1
      },
      768: {
        "items": 1
      },
      992: {
        "items": 1
      },
      1200: {
        "items": 1,
      }
    },
  }
  carouselHeight = 480;
  cellsToShow = 4;
  products:any[] = this.productService.products

}
