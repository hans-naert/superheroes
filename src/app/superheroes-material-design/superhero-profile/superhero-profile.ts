import { Component, Input, Output, OnChanges, SimpleChanges,EventEmitter } from '@angular/core';
import SuperheroText from '../utilities/superhero-text';

@Component({
  selector: 'app-superhero-profile',
  standalone: false,
  styleUrl: './superhero-profile.scss',
  templateUrl: './superhero-profile.html',
  providers: [SuperheroText]
})
export class SuperheroProfile implements OnChanges {
  @Input() name: string = '';
  @Input() firstAppearance: number = 0;
  @Input("lives-in") livesIn: string = '';
  @Output() flyWithSuperhero = new EventEmitter<Superhero>();

  showBgColor: boolean = true;
  showBorder: boolean = true;

   ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
 }

 returnSuperheroData() {
    const superhero: Superhero = {
      name: this.name,
      firstAppearance: this.firstAppearance,
      livesIn: this.livesIn
    };
    this.flyWithSuperhero.emit(superhero);
  }
}


// Create a type representing superhero
export type Superhero = {
 name: string;
 firstAppearance: number;
 livesIn: string;
}