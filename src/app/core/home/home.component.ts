import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  // color= true
  changeImgSrc = false
  setClass:string ='product product-11 text-center'
  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
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
    dots: false,
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
    dots: false,
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
  products:any[] = [
    {
    "category": "health wellness",
    "subCategory": "Ashwagandha",
    "label": "",
    "price": "492.00",
    "oldPrice": "",
    "imageSrc": [
      "assets/images/ashwagandha-1-1.png",
      "assets/images/ashwagandha-1-1.png"
    ],
    "color": [
      "#e5dcb1;",
      "#bacbd8;"
    ],
    "quantity": "1",
    "stockStatus": "",
    "reviews_rating": [
      {
        "reviewRatingStar": 4,
        "reviewersName": "Nirmal",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 1625207937739
      },
      {
        "reviewRatingStar": 5,
        "reviewersName": "Navjeet Singh",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 1625207937739
      }
    ],
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum\n    dolores assumenda asperiores facilis porro reprehenderit animi culpa\n    atque blanditiis commodi perspiciatis doloremque, possimus, explicabo,\n    autem fugit beatae quae voluptas!"
  },
  {
    "category": "health wellness",
    "subCategory": "Ova-cyst",
    "label": "",
    "price": "70.00",
    "oldPrice": "90.00",
    "imageSrc": [
      "assets/images/ova-cyst.png",
      "assets/images/ova-cyst.png"
    ],
    "color": [],
    "quantity": "1",
    "stockStatus": "in stock",
    "reviews_rating": [
      {
        "reviewRatingStar": 4,
        "reviewersName": "Karan",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 1625207937739
      },
      {
        "reviewRatingStar": 3,
        "reviewersName": "Ekam",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 1625207937739
      },
      {
        "reviewRatingStar": 5,
        "reviewersName": "Aman",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 1625207937739
      }
    ],
    "description": ""
  },
  {
    "category": "Health Wellness",
    "subCategory": "PILE OP",
    "label": "",
    "price": "60.00",
    "oldPrice": "",
    "imageSrc": [
      "assets/images/pile-op.png",
      "assets/images/pile-op.png"
    ],
    "color": [
      "#9fac76;",
      "#333333;"
    ],
    "quantity": "1",
    "stockStatus": "in stock",
    "reviews_rating": [
      {
        "reviewRatingStar": 3,
        "reviewersName": "Davinder",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 1625207937739
      },
      {
        "reviewRatingStar": 2,
        "reviewersName": "Mehak",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 1625207937739
      },
      {
        "reviewRatingStar": 3,
        "reviewersName": "Fateh",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 1625207937739
      }
    ],
    "description": ""
  },
  {
    "category": "Health Wellness",
    "subCategory": "Gastro G",
    "label": "",
    "price": "350.00",
    "oldPrice": "",
    "imageSrc": [
      "assets/images/gastro-g.png",
      "assets/images/gastro-g.png"
    ],
    "color": [],
    "quantity": "1",
    "stockStatus": "in stock",
    "reviews_rating": [
      {
        "reviewRatingStar": 2,
        "reviewersName": "Navjeet Singh",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 1625207937739
      },
      {
        "reviewRatingStar": 2,
        "reviewersName": "Rajveer Kaur",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 1625207937739
      },
      {
        "reviewRatingStar": 3,
        "reviewersName": "Inderjeet Singh",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 1625207937739
      }
    ],
    "description": ""
  },
  {
    "category": "clothing",
    "subCategory": "Silk-blended kaftan",
    "label": "",
    "price": "370.00",
    "oldPrice": "",
    "imageSrc": [
      "assets/images/demos/demo-12/products/product-5.jpg",
      "assets/images/demos/demo-12/products/product-5-2.jpg"
    ],
    "color": [],
    "quantity": "1",
    "stockStatus": "in stock",
    "reviews_rating": [
      {
        "reviewRatingStar": 4,
        "reviewersName": "Harsimran",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 0
      },
      {
        "reviewRatingStar": 4,
        "reviewersName": "Sukhraas",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 0
      },
      {
        "reviewRatingStar": 3,
        "reviewersName": "Prabhgeet",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 0
      }
    ],
    "description": ""
  },
  {
    "category": "Sandles",
    "subCategory": "Spring sandlas",
    "label": "",
    "price": "59.00",
    "oldPrice": "",
    "imageSrc": [
      "assets/images/demos/demo-12/products/product-6.jpg",
      "assets/images/demos/demo-12/products/product-6-2.jpg"
    ],
    "color": [],
    "quantity": "1",
    "stockStatus": "",
    "reviews_rating": [
      {
        "reviewRatingStar": 4,
        "reviewersName": "Kulveer Kaur",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 0
      },
      {
        "reviewRatingStar": 5,
        "reviewersName": "Sukhjiner Singh",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 0
      },
      {
        "reviewRatingStar": 3,
        "reviewersName": "Karan",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 0
      }
    ],
    "description": ""
  }
]

}
