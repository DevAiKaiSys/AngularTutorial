import { Component, inject } from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  // starting
  /* template: ``, */
  // completed
  template: ` <p>Car Listing: {{ display }}</p> `,
  standalone: true,
})
export class AppComponent {
  display = '';

  // starting
  /* constructor() {} */
  // completed
  carService = inject(CarService);

  constructor() {
    this.display = this.carService.getCars().join(' ⭐️ ');
  }
}
