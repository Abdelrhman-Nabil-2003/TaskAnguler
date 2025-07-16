import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SectionOneComponent } from './components/img/img.component';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SectionOneComponent, CardComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
// export class AppComponent {
//   protected readonly title = signal('my-app');
// }
export class AppComponent {}
