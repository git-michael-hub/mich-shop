import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/shared/models/order';
import { ShoppingCart } from 'src/app/shared/models/shopping-cart';
import { AuthService } from 'src/app/shared/services/auth.service';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})
export class ShippingFormComponent implements OnInit {

  @Input('cart')
  cart!: ShoppingCart;

  shipping = {
    name: '',
    addressLine1: '',
    addressLine2: '',
    city: ''
  }; 
  userSubscription!: Subscription;
  userId: string = '';
  
  constructor(
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService) {
  }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(
      (user: any) => this.userId = user.uid);
  }

  ngOnDestroy() { 
    this.userSubscription.unsubscribe();
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);
  }    

}
