import { Component, signal } from '@angular/core';
import { Superhero } from './superheroes-material-design/superhero-profile/superhero-profile';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('superheroes-s-z-22');
  printSuperhero(superhero: Superhero) {
    console.log('Flying with superhero:', superhero);
  }
}
