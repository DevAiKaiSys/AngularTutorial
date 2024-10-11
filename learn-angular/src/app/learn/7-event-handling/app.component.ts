import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // starting
  /* template: `
    <section>
      There's a secret message for you, hover to reveal 👀
      {{ message }}
    </section>
  `, */
  // completed
  template: `
    <section (mouseover)="onMouseOver()">
      There's a secret message for you, hover to reveal:
      {{ message }}
    </section>
  `,
  standalone: true,
})
export class AppComponent {
  message = '';
  // starting
  /* onMouseOver() {} */
  // completed
  onMouseOver() {
    this.message = 'Way to go 🚀';
  }
}
