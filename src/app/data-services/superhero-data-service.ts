import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SuperheroDataService {
  private readonly baseUrl = 'http://localhost:3001';
  constructor(private http: HttpClient) { }

  getSuperheroes(): Observable<Superhero[]> {
    return this.http.get<Superhero[]>(`${this.baseUrl}/superheroes`).pipe(
      map(list => list.map(item => ({ ...item, isExpanded: false })))
    );
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
