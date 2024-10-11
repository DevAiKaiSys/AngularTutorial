import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // starting
  /* template: `
    <span>Yes, the server is running</span>
  `, */
  // completed
  template: `
    @if (isServerRunning) {
    <span>Yes, the server is running</span>
    } @else {
    <span>No, the server is not running</span>
    }
  `,
  standalone: true,
})
export class AppComponent {
  // add the boolean property here
  isServerRunning = true;
}
