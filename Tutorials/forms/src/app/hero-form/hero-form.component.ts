import { Component } from '@angular/core';
import { Hero } from '../hero';
import { JsonPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  standalone: true,
  imports: [NgFor, FormsModule, JsonPipe],
  templateUrl: './hero-form.component.html',
  // styleUrl: './hero-form.component.css',
  styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  skyDog(): Hero {
    const myHero = new Hero(
      42,
      'SkyDog',
      'Fetch any object at any distance',
      'Leslie Rollover'
    );
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }
}
