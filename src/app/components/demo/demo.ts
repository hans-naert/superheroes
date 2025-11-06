import { Component, signal } from '@angular/core';
import { Hero } from '../../superheroes-material-design/superhero-profile/superhero-profile';

@Component({
  selector: 'app-demo',
  standalone: false,
  templateUrl: './demo.html',
  styleUrl: './demo.scss'
})
export class Demo {
  protected readonly title = signal('superheroes');
  protected title2: string = 'superheroes';
  protected readonly names = signal(['Aquaman', 'Batman', 'Captain America', 'Catwoman', 'Cyclops', 'Flash', 'Green Lantern', 'Ironman', 'Spiderman', 'Superman', 'Wolverine']);

  printSuperhero(hero: Hero) {
    console.log(hero);
    this.title.set(hero.name);
  }

  handleEvent(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.title.set(inputElement.value);
  }

  handleEvent2(event: any) {
    this.title.set(event.target.value);
  }

}
