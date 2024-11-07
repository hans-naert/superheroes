import { Component } from '@angular/core';
import SuperheroText from '../utilities/superhero-text';

@Component({
  selector: 'app-superhero-toolbar',
  //templateUrl: './superhero-toolbar.component.html',
  template: ` ${1+1}
  <p>test {{superheroText.footerText}}</p>
  `,
  styleUrl: './superhero-toolbar.component.scss'
})
export class SuperheroToolbarComponent {

  superheroText: SuperheroText
  constructor(/*public*/ superheroText: SuperheroText) {
    this.superheroText = superheroText;
   }

}
