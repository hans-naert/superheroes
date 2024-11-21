import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperheroDataService {

  constructor() { }

  getSuperheroes(): string[] {
    return ["superman", "spiderman", "batman", "wonderwoman"];
  }

  get superheroes$() : Observable<string> {
        return new Observable<string>(observer => { 
          observer.next("superman"); 
          observer.next("spiderman"); 
          observer.next("batman");
          setTimeout(() => { 
            observer.next("wonderwoman - delayed"); 
            observer.complete();}
            ,3000);

        }); 
     }
}
