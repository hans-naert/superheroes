import { Injectable } from '@angular/core';
import { Superhero } from '../superheroes-material-design/superhero-profile/superhero-profile.component';
@Injectable({
  providedIn: 'root'
})
export class SuperheroDataService {

  constructor() { }

  getSuperheroes(): Array<Superhero>{
    return [
      {
        name: "Spiderman",
        livesIn: "New York",
        firstAppearance: 1962
      },
      {
        name: "Chhota Bheem",
        livesIn: "Dholakpur",
        firstAppearance: 2008
      }
    ]
  }
}
