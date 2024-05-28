import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CdCartService } from '../cd-cart.service';
import { CD } from '../cd-list/CD';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrl: './shop-list.component.scss'
})
export class ShopListComponent {
  cartList$: Observable<CD[]>;
  constructor (private cart: CdCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

}
