import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  productdetail = {}

    public data: any;
    public Json: any;
    public userToken: any;
  
    constructor() {
      this.data = localStorage.getItem('productDetail')
      this.Json = JSON.parse(this.data);
      this.productdetail = this.Json;
     
    }
    getProductDetail() {
        localStorage.setItem('productDetail', JSON.stringify(this.productdetail))
        return this.productdetail
    }

    getProductDetailtem(item: any) {
        this.productdetail = {};
        this.productdetail = item;
        localStorage.setItem('productDetail', JSON.stringify(this.productdetail))
        return this.productdetail;
    }
}
