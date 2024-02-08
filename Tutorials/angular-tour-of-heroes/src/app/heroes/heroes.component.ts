import { Component } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { NgFor } from '@angular/common';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [HeroDetailComponent, NgFor],
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
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
