import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import SuperheroText from '../utilities/superhero-text';

@Component({
  selector: 'app-superhero-profile',
  templateUrl: './superhero-profile.component.html',
  styleUrls: ['./superhero-profile.component.css'],
  providers: [SuperheroText]
})
export class SuperheroProfileComponent implements OnChanges {

  cssClasses: { [key: string]: boolean } = {
    'show-border': true,
    'show-bg-color': true,
    'apply-margin': true
  }

  fontSize = "30";
  heroWeight: number = 181;

  styles: { [key: string]: string } = {
    'font-size.pt': this.fontSize,
    'color': this.heroWeight > 180 ? 'red' : 'black',
    'font-weight': this.heroWeight > 180 ? 'bold' : 'normal',
    'text-decoration': this.heroWeight > 180 ? 'underline' : 'none'
  }

  @Input() name: string = "";

  private _firstAppearance: number = 0;
  @Input()
  set firstAppearance(val: number) {
    if (val > 1950) {
      this._firstAppearance = val;
    }
    else {
      console.error("Superhero too old!");
    }
  }

  @Input("lives-in") livesIn: string = "";

  @Output() flyWithSuperhero = new EventEmitter<Superhero>();

  returnSuperheroData() {
    let hero = {
      name: this.name,
      livesIn: this.livesIn,
      firstAppearance: this._firstAppearance
    };
    this.flyWithSuperhero.emit(hero);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
export type Superhero = {
  name: string;
  firstAppearance: number;
  livesIn: string;
}