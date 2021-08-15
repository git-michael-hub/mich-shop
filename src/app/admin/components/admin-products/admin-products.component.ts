import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  products: Partial<Product>[] = [];
  filteredProducts: any[] = [];
  subscription: Subscription | undefined;

  constructor(
    private productService: ProductService
  ) { 
    this.subscription = this.productService.getAll()
      .subscribe(actions => {
        this.products = [];

        actions.forEach(action => {
          const val: any = action.payload.val();
          this.products.push({
            $key: action.key ? action.key : '', 
            ...<Object>action.payload.val()
          });
        });

        this.filteredProducts = this.products;
      });
  }

  filter(query: string) {
    this.filteredProducts = (query) 
      ? this.products?.filter(p => p && p.title ? p.title.toLowerCase().includes(query.toLowerCase()) : null)
      : this.products;
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
