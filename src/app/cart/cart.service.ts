import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productCart = [];
  productListCart = [];
  cartList: any[] = []
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
    if (this.Json == null) {
      this.cartList = [];
    } else {
      this.cartList = this.Json;
    }
  }

  getCartItem() {
    return this.cartList.slice();
  }

  cartKey = null
  async loadCart() {

  }


  deleteListItem(id: any, index: any) {
    this.cartList.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cartList));

  }

  onaddItemToCart(product: any) {
     if (this.cartList.some((obj:any) => obj.id === product.id)) {
      this.cartList.push();
    }
    //  if (this.cartList.some((obj:any) => obj.quantity != product.quantity)) {
    //   console.log(this.cartList);
    //   this.cartList = this.cartList.splice(this.cartList.indexOf(product), 1)
    //   console.log(this.cartList);
    //   this.cartList.push(product);
    // }
    else {
    this.cartList.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(this.cartList));
  }


  onInputSpinnerChange(value: any, item: any) {
    item.quantity = value;
    localStorage.setItem('cart', JSON.stringify(this.cartList));
  }

  getCartProductFromFirebase() {
  }
}
