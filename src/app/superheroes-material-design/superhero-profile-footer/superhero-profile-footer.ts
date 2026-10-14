import { Component } from '@angular/core';
import SuperheroText from '../utilities/superhero-text';

@Component({
  selector: 'app-superhero-profile-footer',
  standalone: false,
  styleUrl: './superhero-profile-footer.scss',
  templateUrl: './superhero-profile-footer.html',
})
export class SuperheroProfileFooter {
  //private superheroText: SuperheroText;
  constructor(private superheroText: SuperheroText) {
    //this.superheroText = superheroText;
  }
}
