import { Component } from '@angular/core';
import { Superhero } from '../superhero-profile/superhero-profile.component';
import { SuperheroDataService } from '../../data-services/superhero-data.service';

@Component({
  selector: 'app-superhero-new-list',
  templateUrl: './superhero-new-list.component.html',
  styleUrls: ['./superhero-new-list.component.css']
})
export class SuperheroNewListComponent {

  superheroes: Array<Superhero>;
  constructor(superheroDataService: SuperheroDataService) {
    this.superheroes = superheroDataService.getSuperheroes();
  }

  printSuperhero(hero: Superhero) {
    console.log(hero); // print the received event object.
  }

}
