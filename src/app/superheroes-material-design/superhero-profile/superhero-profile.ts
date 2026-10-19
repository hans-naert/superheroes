import { Component, EventEmitter, Input, Output } from '@angular/core';
import SuperheroText from '../utilities/superhero-text';

@Component({
  selector: 'app-superhero-profile',
  standalone: false,
  styleUrl: './superhero-profile.scss',
  templateUrl: './superhero-profile.html',
  providers: [SuperheroText],
})
export class SuperheroProfile {
  @Input() name: string = '';
  @Input() firstAppearance=0;
  @Input('lives-in') livesIn: string = '';
  @Output() flyWithSuperhero = new EventEmitter<Superhero>();

  isInputDisabled = true;

  superheroes : Superhero[] = [
    { name: 'Superman', firstAppearance: 1938, livesIn: 'Metropolis' },
    { name: 'Batman', firstAppearance: 1939, livesIn: 'Gotham City' },
    { name: 'Wonder Woman', firstAppearance: 1941, livesIn: 'Themyscira' },
    { name: 'Spider-Man', firstAppearance: 1962, livesIn: 'New York City' },
    { name: 'Iron Man', firstAppearance: 1963, livesIn: 'New York City' },
    { name: 'Captain America', firstAppearance: 1941, livesIn: 'Brooklyn' },
    { name: 'Thor', firstAppearance: 1962, livesIn: 'Asgard' },
    { name: 'Hulk', firstAppearance: 1962, livesIn: 'New York City' },
    { name: 'Black Widow', firstAppearance: 1964, livesIn: 'New York City' },
  ];

  returnSuperhero(): void {
    const superhero: Superhero = {
      name: this.name,
      firstAppearance: this.firstAppearance,
      livesIn: this.livesIn,
    };
    this.flyWithSuperhero.emit(superhero);
  }

}

export type Superhero = {
  name: string;
  firstAppearance: number;
  livesIn: string;
};