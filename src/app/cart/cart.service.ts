import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productCart=[];
  productListCart= [];
  cartList:any[] = []
  public data: any;
  public Json: any;
  public userToken: any;
  constructor(
    // private productListService:ProductListingService
    ) {
     this.getCartProductFromFirebase();
     this.loadCart();

     this.data = localStorage.getItem('cart')
     this.Json = JSON.parse(this.data);
     if(this.Json!==null){
      this.cartList = this.Json;
     }
     this.cartList = [];
     
   }
 
   getCartItem() {
     return this.cartList.slice();
   }
 
   cartKey = null
   async loadCart() {
    
   }
 
 
   deleteListItem(id: any , index:any) {
    this.cartList.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cartList));
   
   }
 
   onaddItemToCart(product: any) {
     console.log(this.cartList)
    //  if (this.cartList.some((obj:any) => obj.id === product.id)) {
    //   this.cartList.push();
    // }
    // else {
      this.cartList.push(product);
    // }
    localStorage.setItem('cart', JSON.stringify(this.cartList));
   }
 
 
   onInputSpinnerChange(value: any, item: any) {
     item.quantity = value;
     localStorage.setItem('cart', JSON.stringify(this.cartList));
   }
 
    getCartProductFromFirebase(){
    }
}
