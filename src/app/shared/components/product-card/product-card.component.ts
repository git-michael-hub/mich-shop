import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ShoppingCart } from '../../models/shopping-cart';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product!: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart!: ShoppingCart; 

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
