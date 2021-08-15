import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit {

  orders$;

  constructor(private orderService: OrderService) { 
    this.orders$ = orderService.getOrders();
  }

  ngOnInit(): void {
  }

}
