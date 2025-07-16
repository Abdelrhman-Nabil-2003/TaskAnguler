// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-card',
//   imports: [],
//   templateUrl: './card.html',
//   styleUrl: './card.css'
// })
// export class Card {

// }
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card.component.html',
})
export class CardComponent {
  cards = [
    { title: 'Car One', description: 'Description One' },
    { title: 'Car Two', description: 'Description Two' },
    { title: 'Car cardThree', description: 'Description Three' },
  ];
}
