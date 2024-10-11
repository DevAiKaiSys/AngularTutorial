import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // starting
  styleUrls: ['./app.component.css'],
  /* template: `
    <div contentEditable="false"></div>
  `, */
  // completed
  template: ` <div [contentEditable]="isEditable"></div> `,
  standalone: true,
})
export class AppComponent {
  isEditable = true;
}
