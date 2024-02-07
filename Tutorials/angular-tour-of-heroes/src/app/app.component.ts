import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css',
  styleUrls: ['./app.component.css'],
  imports: [HeroesComponent],
})
export class AppComponent {
  title = 'Tour of Heroes';
}