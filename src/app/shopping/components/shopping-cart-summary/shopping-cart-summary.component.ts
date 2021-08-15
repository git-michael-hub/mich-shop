import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCart } from 'src/app/shared/models/shopping-cart';

@Component({
  selector: 'shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.scss']
})
export class ShoppingCartSummaryComponent implements OnInit {
  @Input('cart') cart!: ShoppingCart;
  
  constructor() { }

  ngOnInit(): void {
  }

}
