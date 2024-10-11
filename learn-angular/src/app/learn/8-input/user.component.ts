import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  // starting
  /* template: ` <p>The user's name is</p> `, */
  // completed
  template: ` <p>The user's name is {{ name }}</p> `,
  standalone: true,
})
export class UserComponent {
  @Input() name = '';
}
