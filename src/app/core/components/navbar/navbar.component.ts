import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUser } from 'src/app/shared/models/app-user';
import { ShoppingCart } from 'src/app/shared/models/shopping-cart';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  appUser: AppUser | undefined;
  cart$: Observable<ShoppingCart> | undefined;

  constructor(
    private auth: AuthService,
    private shoppingCartService: ShoppingCartService
  ) { }

  async ngOnInit(): Promise<void> {
    this.auth.appUser$.subscribe((appUser: any) => {
      this.appUser = appUser;
    });
    this.cart$ = await this.shoppingCartService.getCart();
  }

  logout(): void {
    this.auth.logout();
  }

}
