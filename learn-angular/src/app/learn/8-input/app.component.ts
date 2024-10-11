import { Component } from '@angular/core';
import { UserComponent } from './user.component';

@Component({
  selector: 'app-root',
  // starting
  /* template: `
    <app-user />
  `, */
  // completed
  template: ` <app-user name="Simran" /> `,
  standalone: true,
  imports: [UserComponent],
})
export class AppComponent {}
