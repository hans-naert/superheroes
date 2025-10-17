import { Component } from '@angular/core';
import SuperheroText from '../utilities/superhero-text';
import { Input } from '@angular/core';

@Component({
  selector: 'app-superhero-profile',
  standalone: false,
  //template: `
 // <div>test superhero profile works!</div>
 // `,
  templateUrl: './superhero-profile.html',
  styleUrl: './superhero-profile.scss',
  providers: [SuperheroText]
})
export class SuperheroProfile {

   @Input() name: string="";
   //@Input() firstAppearance: string="";
   @Input("lives-in") livesIn: string="";

    // create a private field 
    private _firstAppearance: number=0; 
    // use a public setter 
    @Input() set firstAppearance(val: number) 
    { if (val > 1950)
      { this._firstAppearance = val;   } 
      else 
        { console.error("Superhero is too old"); 

        } 
      } 
      // getter for the use of template. 
      get firstAppearance() 
      { return this._firstAppearance; }

}
