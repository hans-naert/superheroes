import { Component } from '@angular/core';
import { Superhero } from './superheroes-material-design/superhero-profile/superhero-profile.component';

import { SuperheroDataService } from './data-service/superhero-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'superheroes';

  //heroes= ["superman", "spiderman", "batman", "wonderwoman"];

  heroes : string[] = [];

  constructor(public superheroDataService: SuperheroDataService) { 

    //this.heroes=superheroDataService.getSuperheroes();
    this.superheroDataService.superheroes$.subscribe( hero => this.heroes.push(hero))
  }

  fly(event: Superhero): void
  {
    console.log(event);
    this.title=event.name;
    console.log(JSON.stringify(event));
  }
}
