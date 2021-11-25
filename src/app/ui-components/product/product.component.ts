import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDetailService } from 'src/app/product-detail/product-detail.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private router:Router, private productDetailService:ProductDetailService) { }


  @Input() category: string = '';
  @Input() subCategory: string = '';
  @Input() setClass: string = ''; 
  @Input() visibilityOfRatings:string ='hidden'
  @Input() imagesrc = "";
  @Input() layout='grid';
  @Input() changeImgSrc=true;
  @Input() showColor=false;
  @Input() data: any = {};

  ngOnInit(): void {
  }
  getColor(product: any, index: number) {
    return `background:${product.color[index]}`
  }

  labelStockStatus: any = {
    'out of stock': 'out of stock'
  }
  labelColorMapping: any = {
    'new': "label-new",
    'sale': "label-primary",
    'top': "label-top",
    'out of stock': 'label-out'
  }

  getLabelColor(label: any, item: any) {
    item.stockStatus = String(item.stockStatus).toLowerCase();
    label = String(label).toLowerCase();
    if (item.stockStatus == this.labelStockStatus[item.stockStatus]) {
      item.label = item.stockStatus
    }
    if (label && this.labelColorMapping[label]) {
      return "product-label " + this.labelColorMapping[label];
    } else {
      return "product-label";
    }
   
  }

  getStockStatus(stockStatus: any) {
   let  stock = String(stockStatus).toLowerCase();
    if (stock == this.labelStockStatus[stockStatus]) {
      return true;
    }
    return false;
  }
  getTitle(stockStatus: any) {
   let  stock = String(stockStatus).toLowerCase();
    if (stock == this.labelStockStatus[stockStatus]) {
      return 'Out of stock';
    }
    return 'Add to Cart';
  }

  labelMapping: any = {
    sale: 'sale'
  }

  getLabel(label: any) {
    label = String(label).toLowerCase();
    return (label == this.labelMapping[label]) ? true : false
  }

  onAddtoCart( product:any) {
    console.log('added')
  //  this.shoppingCartService.onaddItemToCart(product.id)
  }   


  onAddItemToWishList(item: any) {
    // this.wishlistService.onAddItemToWishList(item.id)

  }

  onAddToProductDetail(item: any) {
    this.productDetailService.getProductDetailtem(item)
  }

  goToProductDetailComponent() {
    console.log(this.data.subCategory.split(' ').join('-'))
    this.router.navigate(['', this.data.subCategory.split(' ').join('-')]);
  }

  getAverageRating(reviewsRatingList: any) {
    let reviewratingAvg = (Number(reviewsRatingList.reduce((acc: any, item: any) => {
      return (acc + (item.reviewRatingStar));
    }, 0))) / reviewsRatingList.length;
    return 'width:'+(reviewratingAvg*100)/5+'%'
  }

  /*function for changing source of image*/
  onChangeImgColor(imageNameObject: any) {
    this.imagesrc = imageNameObject;
  }

}
