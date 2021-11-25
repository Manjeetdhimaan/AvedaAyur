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
    InputSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
