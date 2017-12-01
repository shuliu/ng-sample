import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CheckoutComponent} from "./checkout/checkout.component";
import {CartComponent} from "./cart.component";

const routes: Routes = [
  {
    path: 'cart',
    // component: CartComponent,
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {
}
