import { Component } from '@angular/core';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, RouterModule, MessagesComponent, HttpClientModule],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
