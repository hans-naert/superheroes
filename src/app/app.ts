import { Component, OnInit, signal } from '@angular/core';
import { Superhero } from './superheroes-material-design/superhero-profile/superhero-profile';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('superheroes');

onFlyWithSuperhero(event: Superhero): void {
  console.log('onFlyWithSuperhero', event); 
}

ngOnInit(): void {
  console.log('App ngOnInit');
}

}
