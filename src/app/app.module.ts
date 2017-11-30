import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CheckoutComponent} from './cart/checkout/checkout.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {HttpModule} from "@angular/http";
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    CartComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
