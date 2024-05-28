import { Component, Input } from '@angular/core';
import { CD } from '../cd-list/CD';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss'
})
export class InputNumberComponent {
  @Input()
  cd : CD;

  downQuantity(cd:CD): void {
    if (cd.quantity>0)
      cd.quantity--;
  }
  
  upQuantity(cd:CD): void {
    if (cd.quantity<cd.stock)
      cd.quantity++;
  }
}
