import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/ui-components/product/product.service';

@Component({
  selector: 'app-product-list2',
  templateUrl: './product-list2.component.html',
  styleUrls: ['./product-list2.component.scss']
})
export class ProductList2Component implements OnInit {

  constructor(private productService: ProductService  ) { }
  productList: any[];
 
  ngOnInit(){
    this.productList =  this.productService.products;
  }

  setClass: string = 'product product-7 text-center'
  visible: string = "visible"

  p: number
  responsive: boolean = true
  itemsPerPage:number = 6

  
}
