import { Component } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './heroes.component.html',
  // styleUrl: './heroes.component.css'
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm',
  // };
  heroes = HEROES;
}
