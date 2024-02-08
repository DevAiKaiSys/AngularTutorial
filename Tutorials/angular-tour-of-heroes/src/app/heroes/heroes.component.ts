import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';

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
  // heroes = HEROES;
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
