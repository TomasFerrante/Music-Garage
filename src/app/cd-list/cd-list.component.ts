import { Component } from '@angular/core';
import { CdCartService } from '../cd-cart.service';
import { CdDataService } from '../cd-data.service';
import { CD } from './CD';

@Component({
  selector: 'app-cd-list',
  templateUrl: './cd-list.component.html',
  styleUrl: './cd-list.component.scss'
})
export class CdListComponent {
  

  constructor (private cart: CdCartService, private cdDataService: CdDataService) {
    this.cart;
    this.cdDataService;
  }
  
  ngOnInit(): void {
    this.cdDataService.getAll()
    .subscribe(cds => this.cds = cds);
  }

  addToCart(cd:CD): void {
    this.cart.addToCart(cd);
    cd.stock -= cd.quantity;
    cd.quantity = 0;
  }

  cds: CD[] = [];

}


