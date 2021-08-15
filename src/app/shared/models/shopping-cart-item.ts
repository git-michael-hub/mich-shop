import { Product } from './product';

export class ShoppingCartItem {
  $key!: string;
  title!: string;
  imageUrl!: string;
  price!: number; 
  quantity!: number; 
  category!: string;

  constructor(init?: Partial<ShoppingCartItem>) {
    Object.assign(this, init);
  }

  get totalPrice() { return this.price * this.quantity; }
}