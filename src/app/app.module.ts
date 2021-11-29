import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './core/home/home.component';
import { MobileMenuComponent } from './core/mobile-menu/mobile-menu.component';
import { SignupModelComponent } from './core/signup-model/signup-model.component';
import { ProductComponent } from './ui-components/product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { TimeAgoPipe } from 'time-ago-pipe';
import { InputSpinnerComponent } from './ui-components/input-spinner/input-spinner.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListRowComponent } from './product-listing/product-list-row/product-list-row.component';
import { ProductListToolboxComponent } from './product-listing/product-list-toolbox/product-list-toolbox.component';
import { FiltersComponent } from './ui-components/filters/filters.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductList2Component } from './product-listing/product-list2/product-list2.component';
import { ProductList3Component } from './product-listing/product-list3/product-list3.component';
import { ProductList4Component } from './product-listing/product-list4/product-list4.component';

@Pipe({
  name: 'timeAgo',
  pure: false
})
export class TimeAgoExtendsPipe extends TimeAgoPipe {}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MobileMenuComponent,
    SignupModelComponent,
    ProductComponent,
    ProductDetailComponent,
    InputSpinnerComponent,
    CartComponent,
    ProductListRowComponent,
    ProductListToolboxComponent,
    FiltersComponent,
    ProductList2Component,
    ProductList3Component,
    ProductList4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
