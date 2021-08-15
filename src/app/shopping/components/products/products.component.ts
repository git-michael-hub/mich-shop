import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/product';
import { ShoppingCart } from 'src/app/shared/models/shopping-cart';
import { ProductService } from 'src/app/shared/services/product.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string | undefined;
  cart$: Observable<ShoppingCart> | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService
  ) {
  }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    this.populateProducts();
  }

  private populateProducts() { 
    this.productService
      .getAll()
      .pipe(
        switchMap(actions => {
          this.products = [];
  
          actions.forEach(action => {
            const val: any = action.payload.val();
  
            this.products.push({
              $key: <string>action.key, 
              title: <string>val.title,
              price: <number>val.price, 
              category: <string>val.category,
              imageUrl: <string>val.imageUrl
            });
          });

          return this.route.queryParamMap;
        }
        )
      )
      .subscribe((params: any) => {
        this.category = params.get('category');
        this.applyFilter();      
      });
  }

  private applyFilter() { 
    this.filteredProducts = (this.category) 
      ? this.products.filter(p => p.category === this.category) 
      : this.products;
  }

}
