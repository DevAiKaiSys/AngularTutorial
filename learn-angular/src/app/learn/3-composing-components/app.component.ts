import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    Username: {{ username }}
  `,
  standalone: true,
})
export class UserComponent {
  username = 'youngTech';
}

@Component({
  selector: 'app-root',
  // starting
  /* template: ``, */
  // completed
  template: `
    <section>
      <app-user />
    </section>
  `,
  standalone: true,
  imports: [UserComponent],
})
export class AppComponent {}
