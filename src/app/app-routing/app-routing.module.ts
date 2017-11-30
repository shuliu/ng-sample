import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CheckoutComponent} from "../cart/checkout/checkout.component";
import {AppComponent} from "../app.component";
import {CartComponent} from "../cart/cart.component";


const APPROUTES: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          {path: 'main', component: CartComponent},
          {path: 'checkout', component: CheckoutComponent}
        ],
      }
    ]
  },
  {path: 'home', component: AppComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(APPROUTES)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
