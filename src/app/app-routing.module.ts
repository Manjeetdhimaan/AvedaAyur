import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './core/home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductListRowComponent } from './product-listing/product-list-row/product-list-row.component';
import { ProductList2Component } from './product-listing/product-list2/product-list2.component';
import { ProductList3Component } from './product-listing/product-list3/product-list3.component';
import { ProductList4Component } from './product-listing/product-list4/product-list4.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products-row', component: ProductListRowComponent },
  { path: 'products-list2', component: ProductList2Component },
  { path: 'products-list3', component: ProductList3Component },
  { path: 'products-list4', component: ProductList4Component },
  { path: 'cart', component: CartComponent },
  { path: ':name', component: ProductDetailComponent },
  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
