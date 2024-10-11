import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // starting
  /* template: `
    Hello
  `, */
  // completed
  template: `
    Hello {{ city }}, {{ 1 + 1 }}
  `,
  standalone: true,
})
export class AppComponent {
  city = 'San Francisco';
}
