import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [],
  templateUrl: './heroes.component.html',
  // styleUrl: './heroes.component.css'
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  hero = 'Windstorm';
}
