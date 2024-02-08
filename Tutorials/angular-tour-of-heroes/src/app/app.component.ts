import { Component } from '@angular/core';
import { MessagesComponent } from './messages/messages.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, MessagesComponent],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
