import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  styles: `.btn { padding: 5px; }`,
  template: ` <button class="btn" (click)="addItem()">Add Item</button> `,
  standalone: true,
})
export class ChildComponent {
  // starting
  /* addItem() {} */
  // completed
  @Output() addItemEvent = new EventEmitter<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}
