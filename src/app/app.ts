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

   printSuperhero(hero: Hero) 
   { console.log(hero); // print the received event object. 
    }
}
