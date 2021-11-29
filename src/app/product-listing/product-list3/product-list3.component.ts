import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/ui-components/product/product.service';

@Component({
  selector: 'app-product-list3',
  templateUrl: './product-list3.component.html',
  styleUrls: ['./product-list3.component.scss']
})
export class ProductList3Component implements OnInit {
  p:any
  responsive:boolean =true
  maxSize:number= 3
  constructor(private productService: ProductService) { }
  productListGrid3:any[]
  ngOnInit(): void {
    this.productListGrid3 = this.productService.products;
  }
  setClass:string = 'product product-7 text-center'
  visible:string = "visible"
  
}
