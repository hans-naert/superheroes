import { Component } from '@angular/core';
import SuperheroText from '../utilities/superhero-text';

@Component({
  selector: 'app-superhero-profile-footer',
  standalone: false,
  templateUrl: './superhero-profile-footer.html',
  styleUrl: './superhero-profile-footer.scss'
})
export class SuperheroProfileFooter {
  //public superheroText: SuperheroText;
  constructor( public superheroText: SuperheroText) { 
    //this.superheroText = superheroText;
  }

}
