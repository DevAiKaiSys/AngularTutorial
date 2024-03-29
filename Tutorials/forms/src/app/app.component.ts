import { Component } from '@angular/core';
import { HeroFormComponent } from './hero-form/hero-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'forms';
}
