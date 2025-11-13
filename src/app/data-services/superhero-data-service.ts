import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SuperheroDataService {
  private readonly baseUrl = 'http://localhost:3001';
  constructor(private http: HttpClient) {
    let superhero = new Superhero();
      superhero.name = 'Default Hero';
      superhero.email = 'default.hero@example.com';
      superhero.details = 'A default superhero added on service initialization.';
      superhero.country = 'Nowhere';
      superhero.specialPowers = ['Invisibility', 'Flight'];
      superhero.favFood = ['Pizza', 'Ice Cream'];
      superhero.cardImage = 'https://via.placeholder.com/150';
      this.addSuperhero(superhero);
   }

  getSuperheroes(): Observable<Superhero[]> {
    return this.http.get<Superhero[]>(`${this.baseUrl}/superheroes`).pipe(
      map(list => list.map(item => ({ ...item, isExpanded: false })))
    );
  }

  addSuperhero(superhero: Superhero): Observable<Superhero> {
    return this.http.post<Superhero>(`${this.baseUrl}/superheroes`, superhero);
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
