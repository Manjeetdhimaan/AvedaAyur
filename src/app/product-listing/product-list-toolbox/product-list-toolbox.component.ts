import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/ui-components/product/product.service';

@Component({
  selector: 'app-product-list-toolbox',
  templateUrl: './product-list-toolbox.component.html',
  styleUrls: ['./product-list-toolbox.component.scss']
})
export class ProductListToolboxComponent implements OnInit {

  productList:any[];
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
   this.productList =  this.productService.products;
  }
}
