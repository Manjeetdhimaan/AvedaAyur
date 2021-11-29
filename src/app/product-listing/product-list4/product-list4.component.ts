import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/ui-components/product/product.service';

@Component({
  selector: 'app-product-list4',
  templateUrl: './product-list4.component.html',
  styleUrls: ['./product-list4.component.scss']
})
export class ProductList4Component implements OnInit {

  constructor(private productService: ProductService) { }
  productListGrid4:any[]
  ngOnInit(): void {
    this.productListGrid4 = this.productService.products;
  }
  setClass:string = 'product product-7 text-center'
  visible:string = "visible"
  p:any
  responsive:boolean = true
  
}
