import { Component } from '@angular/core';
import { DecimalPipe, DatePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  // starting
  /* template: `
    <ul>
      <li>Number with "decimal" {{ num }}</li>
      <li>Date with "date" {{ birthday }}</li>
      <li>Currency with "currency" {{ cost }}</li>
    </ul>
  `, */
  // completed
  template: `
    <ul>
      <li>Number with "decimal" {{ num | number : '3.2-2' }}</li>
      <li>Date with "date" {{ birthday | date : 'medium' }}</li>
      <li>Currency with "currency" {{ cost | currency }}</li>
    </ul>
  `,
  standalone: true,
  imports: [DecimalPipe, DatePipe, CurrencyPipe],
})
export class AppComponent {
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}
