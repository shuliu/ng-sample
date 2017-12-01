///<reference path="cart/cart.module.ts"/>
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CheckoutComponent} from './cart/checkout/checkout.component';
import {AppRoutingModule} from "./app-routing.module";
import {CartComponent} from './cart/cart.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {ProductComponent} from './product/product.component';
import {CartModule} from "./cart/cart.module";
import {ProductModule} from "./product/product.module";


@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    CartComponent,
    HomeComponent,
    HeaderComponent,
    ProductComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CartModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
