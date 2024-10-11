import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // starting
  /* template: `
    Hello
  `,
  styles: `
    :host {
      color: blue;
    }
  `, */
  // completed
  template: `
    Hello Universe
  `,
  styles: `
    :host {
      color: #a144eb;
    }
  `,
  standalone: true,
})
export class AppComponent { }
