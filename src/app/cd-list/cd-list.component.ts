import { Component } from '@angular/core';
import { CD } from './CD';

@Component({
  selector: 'app-cd-list',
  templateUrl: './cd-list.component.html',
  styleUrl: './cd-list.component.scss'
})
export class CdListComponent {

  cds: CD[] = [
    {
      name: 'ERROR',
      artist: 'The Warning',
      price: 19.99,
      stock: 20,
      image: 'assets/img/ERROR.jpg',
      quantity: 0,
    },
    {
      name: 'Led Zeppelin IV',
      artist: 'Led Zeppelin',
      price: 29.99,
      stock: 50,
      image: 'assets/img/Led_Zeppelin_IV.jpg',
      quantity: 0,
    },
    {
      name: 'Lateralus',
      artist: 'Tool',
      price: 24.99,
      stock: 30,
      image: 'assets/img/Lateralus.jpg',
      quantity: 0,
    },
    {
      name: 'Rosenrot',
      artist: 'Rammstein',
      price: 19.99,
      stock: 25,
      image: 'assets/img/Rosenrot.jpg',
      quantity: 0,
    },
    {
      name: "Infest the Rats' Nest",
      artist: 'King Gizzard & the Lizard Wizard',
      price: 19.99,
      stock: 15,
      image: "assets/img/Infest_the_Rats'_Nest.jpg",
      quantity: 0,
    }
  ]

  downQuantity(cd:CD): void {
  if (cd.quantity>0)
    cd.quantity--;
}

upQuantity(cd:CD): void {
  if (cd.quantity<cd.stock)
    cd.quantity++;
}
}


