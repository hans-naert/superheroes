import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('superheroes');

   printSuperhero(hero: any) 
   { console.log(hero); // print the received event object. 
    }
}
