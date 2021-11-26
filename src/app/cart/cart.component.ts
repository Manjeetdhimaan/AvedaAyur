import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService,
    private formBuilder: FormBuilder,
    // private productListService: ProductListingService
    ) {
     
     }

  freeShipping = '0.00'
  Standart = '10.00'
  Express = '20.00'


  shippingForm: FormGroup

  @ViewChild('n') spinnerValue: ElementRef<any>
  cartList:any[] = [];

  public data: any;
  public Json: any;
  public userToken: any;
  // cartItems = this.cartService.cart.value;
  ngDoCheck() {
    this.cartList = this.cartService.getCartItem();
   }
ngOnChanges(){
}
  ngOnInit() {
  
    this.shippingForm = this.formBuilder.group({
      shippingCost: [this.freeShipping, [Validators.required]]
    });
    this.cartService.getCartProductFromFirebase();
      this.data = localStorage.getItem('cart')
     this.Json = JSON.parse(this.data);
     this.cartList = this.Json;
  }

  getTotal() {
    return Number(this.shippingForm.controls['shippingCost'].value);
  }

  deleteListItem(id: any, index: any) {
    this.cartService.deleteListItem(id, index);
    this.cartList = this.cartService.getCartItem();
  }

  onInputSpinnerChange(value: any, item: any) {
    this.cartService.onInputSpinnerChange(value, item)
  }

  subTotal() {
    return Number(this.cartList.reduce((acc:any, item:any) => {
      return acc + (item.price * item.quantity);
    }, 0));

  }

  onUpdate() {
    this.cartList = this.cartService.getCartItem()
  }

}
