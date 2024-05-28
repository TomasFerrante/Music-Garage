import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CD } from './cd-list/CD';

@Injectable({
  providedIn: 'root'
})
export class CdCartService {
  private _cartList: CD[] = [];
  cartList: BehaviorSubject<CD[]> = new BehaviorSubject<CD[]>([]);
  
  constructor() { }
  
  addToCart(cd: CD) {
    let item = this._cartList.find((v1)=>v1.name == cd.name);
    if (!item){
      this._cartList.push({...cd});
    }
    else {
      item.quantity += cd.quantity;
    }
    this.cartList.next(this._cartList);
  }

}
