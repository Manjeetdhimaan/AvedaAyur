import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/ui-components/product/product.service';

@Component({
  selector: 'app-product-list-row',
  templateUrl: './product-list-row.component.html',
  styleUrls: ['./product-list-row.component.scss']
})
export class ProductListRowComponent implements OnInit {

  constructor(private productService: ProductService) { }
  productListRow:any[];
  ngOnInit(): void {
    this.productListRow =  this.productService.products;
    console.log(this.productListRow)
    
  }
  p:any
  responsive:boolean =true
  visible:string = "visible"
  layout:string= "list"
  
}
