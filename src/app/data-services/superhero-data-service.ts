import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperheroDataService {
  constructor() { }

  getSuperheroes(): Observable<Array<Superhero>>{
    return new Observable<Array<Superhero>>( observer => {
      observer.next([
        {
          name: "Chhotta Bheem",
          email: "ChhottaBheem@angularsample.com",
          details: "A hero in Dholakpur village",
          country: "India",
          cardImage: "/assets/chhottabheem.png",
          specialPowers: ["a very strong boy!"],
          favFood: ["Laddu"]
        },
        {
          name: "Spiderman",
          email: "spiderman@angularsample.com",
          details: "A hero in New York city",
          country: "United States",
          specialPowers: ["Shoots web"],
          cardImage: "/assets/spiderman.jpg",
          favFood: ["Cheese burger"]
        },
        {
          name: "Batman",
          email: "batman@angularsample.com",
          details: "A hero in Gotham city",
          country: "United Kingdom",
          cardImage: "/assets/batman.png",
          specialPowers: ["Martial Arts"],
          favFood: ["Spaghetti"]
        }
      ]);
      observer.complete();
    })
  }
  
}
export class Superhero {
    name: string = '';
    email: string = '';
    details: string = '';
    country: string = '';
    specialPowers: Array<string> = [];
    favFood: Array<string> = [];
    cardImage: string = '';
    isExpanded?: boolean = false;
}
