import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import SuperheroText from '../utilities/superhero-text';

@Component({
  selector: 'app-superhero-profile',
  templateUrl: './superhero-profile.component.html',
  styleUrls: ['./superhero-profile.component.css'],
  providers: [SuperheroText]
})
export class SuperheroProfileComponent implements OnChanges {
  @Input() name:string="";
  
  private _firstAppearance: number=0;
  @Input() 
  set firstAppearance(val: number) {
    if(val > 1950) {
      this._firstAppearance = val;
    }
    else
    {
      console.error("Superhero too old!");
    }
  }

  @Input("lives-in") livesIn: string="";

  @Output() flyWithSuperhero = new EventEmitter<Superhero>();

  returnSuperheroData(){
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