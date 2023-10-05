import { Component, Input } from '@angular/core';
import SuperheroText from '../utilities/superhero-text';

@Component({
  selector: 'app-superhero-profile',
  templateUrl: './superhero-profile.component.html',
  styleUrls: ['./superhero-profile.component.css'],
  providers: [SuperheroText]
})
export class SuperheroProfileComponent {
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

}
