import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Superhero } from '../superheroes-material-design/superhero-profile/superhero-profile.component';
@Injectable({
  providedIn: 'root'
})
export class SuperheroDataService {

  constructor() { }

  getSuperheroes(): Array<Superhero> {
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

  getSuperheroesObservable(): Observable<Superhero> {
    return new Observable<Superhero>(observer => {
      observer.next({
        name: "Spiderman",
        livesIn: "New York",
        firstAppearance: 1962
      });
      observer.next({
        name: "Chhota Bheem",
        livesIn: "Dholakpur",
        firstAppearance: 2008
      });
      setTimeout(() => { observer.next({ name: "Superman", livesIn: "Metropolis", firstAppearance: 1938 }) }, 2000);
      setTimeout(() => { observer.next({ name: "Batman", livesIn: "Gotham City", firstAppearance: 1939 }) }, 4000);
      setTimeout(() => { observer.complete(); }, 5000);
    }
    );

  }
}
