import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // starting
  /* template: ` {{ username }} `,
  standalone: true,
  imports: [], */
  // completed
  template: ` {{ username | lowercase }} `,
  standalone: true,
  imports: [LowerCasePipe],
})
export class AppComponent {
  username = 'yOunGTECh';
}
