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