import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent {
  orders$: any;
  
  constructor(
    private authService: AuthService,
    private orderService: OrderService
  ) { 
    this.orders$ = authService.user$.pipe(switchMap((u: any) => orderService.getOrdersByUser(u.uid)));
  }

}
