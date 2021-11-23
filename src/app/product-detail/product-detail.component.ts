import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from './product-detail.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private productDetailService:ProductDetailService) { }


  productdetail:any
  show = false
  ngOnInit(): void {
    this.productdetail = this.productDetailService.getProductDetail()
     this.imagesrc = this.productdetail.imageSrc[0]
    if (this.productdetail.length !== 0) {
      this.show = true
    }
    this.getTotalReviewsAvg()
    // this.getSinglePersonReview();

  }


   
  onAddItemToCart(item: any) {
  //  this.shoppingCartService.onaddItemToCart(item.id)  
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
    // this.productdetail.some(obj => this.widthOfReviewStarRating = obj.reviews_rating.map((n:any)=>{return 'width:'+(n)*100/5+'%'}));
    // console.log(this.widthOfReviewStarRating);
  }

  width = 0
  getTotalReviewsAvg() {
     this.width += Number(this.productdetail.n.reviews_rating.reviewRatingStar)
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
}
