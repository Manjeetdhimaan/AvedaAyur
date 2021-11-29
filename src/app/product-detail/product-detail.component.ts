import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { ProductService } from '../ui-components/product/product.service';
import { ProductDetailService } from './product-detail.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  constructor(
    private productDetailService: ProductDetailService,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService) { }


  productdetail: any
  show = false

  public data: any;
  public Json: any;
  public userToken: any;

  ngOnInit(): void {
    if(this.productDetailService.productdetail!==null){
      this.productdetail = this.productDetailService.getProductDetail()
      this.imagesrc = this.productdetail.imageSrc[0]
    }
    this.productService.products.map((a: any) => {
      if(this.productDetailService.productdetail!==null){
        if(a.subCategory.toLowerCase() == this.productdetail.subCategory.toLowerCase()){
          this.productdetail = this.productDetailService.getProductDetail()
          this.imagesrc = this.productdetail.imageSrc[0];
          return
        }
      }
      if (a.subCategory.toLowerCase() == this.router.url.slice(1).split('-').join(' ').toLowerCase()) {
        this.productdetail = a;
        this.imagesrc = this.productdetail.imageSrc[0]
        localStorage.setItem('productDetail', JSON.stringify(this.productdetail));
        return;
      }
      if(this.productDetailService.productdetail==null && a.subCategory.toLowerCase() !== this.router.url.slice(1).split('-').join(' ').toLowerCase()){
        this.router.navigate(['home']);
      }
      
      
    })

    if (this.productdetail?.length !== 0) {
      this.show = true
    }
    this.getTotalReviewsAvg()
    this.getSinglePersonReview();



  }

  onAddItemToCart(item: any) {

    this.cartService.onaddItemToCart(item)
  }


  onAddItemToWishlsit(item: any) {
    // this.wishListService.onAddItemToWishList(item.id)
  }
  onInputSpinnerChange(value: any, item: any) {
    item.quantity = value
    localStorage.setItem('productDetail', JSON.stringify(this.productdetail))
  }



  imagesrc = "";
  onChangeImgColor(imageNameObject: any) {
    this.imagesrc = imageNameObject;
  }

  // widthOfReviewStarRating:any =[]
  getSinglePersonReview() {
    // this.productdetail?.some(obj => this.widthOfReviewStarRating = obj.reviews_rating.map((n:any)=>{return 'width:'+(n)*100/5+'%'}));
    // console.log(this.widthOfReviewStarRating);
  }

  width = 0
  getTotalReviewsAvg() {
    this.width += Number(this.productdetail?.reviews_rating.reviewRatingStar)
  }

  labelStockStatus: any = {
    'out of stock': 'out of stock'
  }

  getStockStatus(stockStatus: any) {
    stockStatus = String(stockStatus).toLowerCase();
    if (stockStatus == this.labelStockStatus[stockStatus]) {
      return true;
    }
    return false;
  }



  onLike(item: any) {
    item.reviewlikes++
  }

  onDislike(item: any) {
    item.reviewdislikes++
  }
  nextProduct() {
    // this.productService.products.map((a: any, i:any) => {
    //   // console.log(this.productdetail?.subCategory)
    //   // console.log(a.subCategory)
    //   // console.log()
    //   if (this.productdetail?.subCategory.toLowerCase().split('-').join('') == a.subCategory.toLowerCase().split('-').join('')) {
    //       let a = this.productService.products[i+1]
    //       console.log(a, "i",i)
    //       localStorage.setItem('productDetail', JSON.stringify(a))
    //       this.data = localStorage.getItem('productDetail')
    //       this.Json = JSON.parse(this.data);
    //       this.productdetail = this.Json;
    //       // this.productdetail = this.productDetailService.getProductDetail()
    //       // this.productdetail = a;
    //       // localStorage.setItem('productDetail', JSON.stringify(this.productdetail));

    //   }
    // })
  }

  ngOnDestroy() {
    localStorage.removeItem('productDetail')
  }
}
