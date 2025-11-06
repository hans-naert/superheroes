import { Component, signal } from '@angular/core';
import { Hero } from './superheroes-material-design/superhero-profile/superhero-profile';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('superheroes');

  protected readonly names = signal(['Aquaman', 'Batman', 'Captain America', 'Catwoman', 'Cyclops', 'Flash', 'Green Lantern', 'Ironman', 'Spiderman', 'Superman', 'Wolverine']);

  printSuperhero(hero: Hero) {
    console.log(hero); // print the received event object. 
    this.title.set(hero.name);
  }
}
