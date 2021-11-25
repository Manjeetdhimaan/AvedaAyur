import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
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
  productList:any = [{
    id:'ab1',
    category: 'Women',
    subCategory: 'Brown paperbag waist pencil skirt',
    label: '',
    price: '60.00',  
    oldPrice: '',
    imageSrc: ['4'].map((n) => { return `assets/images/products/product-${n}.jpg` }),
    colorChoiceImgSrc:['4' , '4-2', '4-3'].map((n) => { return `assets/images/products/product-${n}-thumb.jpg`}),
    quantity:'1',
    stockStatus:'Out of stock',
    reviews_rating: [
      {
      reviewRatingStar:4,
      reviewersName:"Nirmal",
      reviewlikes:0,
      reviewdislikes:0,
      time: new Date().getTime()
    },
      {
      reviewRatingStar:5,
      reviewersName:"Navjeet Singh",
      reviewlikes:0,
      reviewdislikes:0,
      time: new Date().getTime()
    }
  ],
    description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum
    dolores assumenda asperiores facilis porro reprehenderit animi culpa
    atque blanditiis commodi perspiciatis doloremque, possimus, explicabo,
    autem fugit beatae quae voluptas!`
  },
  {
    id:'ab2',
    category: 'Dresses',
    subCategory: 'Dark yellow lace cut out swing dress',
    label: 'Top',
    price: '84.00',
    oldPrice: '90.00',
    imageSrc: ['5'].map((n) => { return `assets/images/products/product-${n}.jpg` }),
    colorChoiceImgSrc:['5' , '5-2'].map((n) => { return `assets/images/products/product-${n}-thumb.jpg`}),   
    quantity:'1',
    stockStatus:'in stock',
    reviews_rating: [
      {
      reviewRatingStar:4,
      reviewersName:"Karan",
      reviewlikes:0,
      reviewdislikes:0,
      time:new Date().getTime()
    },
      {
      reviewRatingStar:3,
      reviewersName:"Ekam",
      reviewlikes:0,
      reviewdislikes:0,
      time:new Date().getTime()
    },
      {
      reviewRatingStar:5,
      reviewersName:"Aman",
      reviewlikes:0,
      reviewdislikes:0,
      time:new Date().getTime()
    },
      {
      reviewRatingStar:5,
      reviewersName:"Aman",
      reviewlikes:0,
      reviewdislikes:0,
      time:new Date().getTime()
    }
  ],
    description:''
  },
  {
    id:'ab3',
    category: 'Jackets',
    subCategory: 'Khaki utility boiler jumpsuit',
    label: '',
    price: '120.00',
    oldPrice: '',
    imageSrc: ['6'].map((n) => { return `assets/images/products/product-${n}.jpg`  }),
    quantity:'1',
    stockStatus:'in stock',
    reviews_rating:  [
      {
      reviewRatingStar:3,
      reviewersName:"Davinder",
      reviewlikes:0,
      reviewdislikes:0,
      time:new Date().getTime()
    },
      {
      reviewRatingStar:2,
      reviewersName:"Mehak",
      reviewlikes:0,
      reviewdislikes:0,
      time:new Date().getTime()
    },
      {
      reviewRatingStar:3,
      reviewersName:"Fateh",
      reviewlikes:0,
      reviewdislikes:0,
      time:new Date().getTime()
    }
  ],
    description:''

  },


  {

    id:'ab4',
    category: 'Jeans',
    subCategory: 'Blue utility pinafore denim dress',
    label: '',
    price: '76.00',
    oldPrice: '',
    imageSrc: ['7'].map((n) => { return `assets/images/products/product-${n}.jpg`}),
    colorChoiceImgSrc: [],
    quantity:'1',
    stockStatus:'in stock',
    reviews_rating: [
      {
      reviewRatingStar:2,
      reviewersName:"Navjeet Singh",
      reviewlikes:0,
      reviewdislikes:0,
      time:new Date().getTime()
    },
      {
      reviewRatingStar:2,
      reviewersName:"Rajveer Kaur",
      reviewlikes:0,
      reviewdislikes:0,
      time:new Date().getTime()
    },
      {
      reviewRatingStar:3,
      reviewersName:"Inderjeet Singh",
      reviewlikes:0,
      reviewdislikes:0,
      time:new Date().getTime()
    }
  ],
    description:''
  },
  {
    id:'ab5',
    category: 'Shoes',
    subCategory: 'Beige knitted elastic runner shoes',
    label: 'new',
    price: '84.00',  
    oldPrice: '',
    imageSrc: ['8'].map((n) => { return `assets/images/products/product-${n}.jpg`}),
    colorChoiceImgSrc:['8', '8-2'].map((n) => { return `assets/images/products/product-${n}-thumb.jpg`}),
    quantity:'1',
    stockStatus:'in stock',
    reviews_rating: [
      {
      reviewRatingStar:4,
      reviewersName:"Harsimran",
      reviewlikes:0,
      reviewdislikes:0,
      time:0,
    },
      {
      reviewRatingStar:4,
      reviewersName:"Sukhraas",
      reviewlikes:0,
      reviewdislikes:0,
      time:0,
    },
      {
      reviewRatingStar:3,
      reviewersName:"Prabhgeet",
      reviewlikes:0,
      reviewdislikes:0,
      time:0,
    }
  ],
    description:''
  },
  {
    id:'ab6',
    category: 'Bags',
    subCategory: 'Orange saddle lock front chain cross body bag',
    label: '',
    price: '84.00',
    oldPrice: '',
    imageSrc: ['9'].map((n) => { return `assets/images/products/product-${n}.jpg`}),
    colorChoiceImgSrc:['9', '9-2', '9-3'].map((n) => { return `assets/images/products/product-${n}-thumb.jpg`}),
    quantity:'1',
    stockStatus:'out of stock',
    reviews_rating: [
      {
      reviewRatingStar:4,
      reviewersName:"Kulveer Kaur",
      reviewlikes:0,
      reviewdislikes:0,
      time:0,
    },
      {
      reviewRatingStar:5,
      reviewersName:"Sukhjiner Singh",
      reviewlikes:0,
      reviewdislikes:0,
      time:0,
    },
      {
      reviewRatingStar:3,
      reviewersName:"Karan",
      reviewlikes:0,
      reviewdislikes:0,
      time:0,
    }
  ],
    description:''
  }
  ]


}
