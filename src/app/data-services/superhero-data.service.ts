import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperheroDataService {

  constructor() { }

  getSuperheroes(): Array<string> {
    return ["Superman","Spiderman"]
  }

  getObservableSuperheroes(): Observable<string> {
    return new Observable<string>((observer) => {
    observer.next("Vives"); 
	  observer.next("student"); 
	  observer.next("Kortrijk"); 
    
	setTimeout(() => { observer.next("West Vlaanderen"); observer.complete(); }, 1000); 
  })}
}
