import { Component } from '@angular/core';
import SuperheroText from '../utilities/superhero-text';

@Component({
  selector: 'app-superhero-profile-footer',
  templateUrl: './superhero-profile-footer.component.html',
  styleUrls: ['./superhero-profile-footer.component.css']
})
export class SuperheroProfileFooterComponent {

  public title:string="";
  constructor(private superheroText: SuperheroText) {
    this.title = superheroText.footerText;
   }

}
