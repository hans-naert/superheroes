import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuperheroDataService {

  constructor() { }

  getSuperheroes(): string[] {
    return ["superman", "spiderman", "batman", "wonderwoman"];
  }
}
