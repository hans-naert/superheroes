import { Component, Input, Output, EventEmitter } from '@angular/core';
import SuperheroText from '../utilities/superhero-text';

@Component({
  selector: 'app-superhero-profile',
  templateUrl: './superhero-profile.component.html',
  styleUrl: './superhero-profile.component.scss',
  viewProviders: [SuperheroText]
})
export class SuperheroProfileComponent {
  @Input() name: string="Superman";
  @Input() firstAppearance: number = 1938;
  @Input("lives-in") livesIn: string = "Metropolis";
  @Output() fly = new EventEmitter<Superhero>();

  returnSuperheroData(): void 
  {
    let superhero: Superhero = {
      name: this.name,
      firstAppearance: this.firstAppearance,
      livesIn: this.livesIn
    }
    this.fly.emit(superhero);
  }

}

// Create a type representing superhero
export type Superhero = {
  name: string;
  firstAppearance: number;
  livesIn: string;
  }
