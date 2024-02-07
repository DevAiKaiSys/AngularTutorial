import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './heroes.component.html',
  // styleUrl: './heroes.component.css'
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
}
