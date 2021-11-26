import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { ProductDetailService } from 'src/app/product-detail/product-detail.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  public data: any;
  public Json: any;
  public userToken: any;
  product:any={};

  constructor(private cartService: CartService,
     private productDetailService:ProductDetailService,
     private router:Router) { }
  cartArray:any = this.cartService.cartList;
  moreCart:boolean = false;
  ngOnInit(): void {
    // this.data = localStorage.getItem('productDetail')
    // this.Json = JSON.parse(this.data);
    this.product = this.productDetailService.getProductDetail();

    
  }

  onDeleteItemFromCart(item:any, index:number){
    this.cartService.deleteListItem(item, index)
  }
  viewMoreCart(){
    this.moreCart = true;
  }
  viewLessCart(){
    this.moreCart = false;
  }
  subTotal() {
    return Number(this.cartArray.reduce((acc:any, item:any) => {
      return acc + (item.price * item.quantity);
    }, 0));
  }

}
