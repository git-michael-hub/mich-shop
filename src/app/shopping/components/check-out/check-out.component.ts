import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'src/app/shared/models/shopping-cart';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  cart$: Observable<ShoppingCart> | undefined;
  
  constructor(private shoppingCartService: ShoppingCartService) {}
  
  async ngOnInit() { 
    this.cart$ = await this.shoppingCartService.getCart();
  }

}
