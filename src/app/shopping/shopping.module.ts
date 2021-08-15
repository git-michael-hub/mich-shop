import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CheckOutComponent,
    MyOrdersComponent,
    OrderSuccessComponent,
    ShippingFormComponent,
    ShoppingCartComponent,
    ShoppingCartSummaryComponent,
    ProductFilterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShoppingRoutingModule,
  ]
})
export class ShoppingModule { }
