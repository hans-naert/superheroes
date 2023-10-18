import { Component } from '@angular/core';
import { SuperheroDataService } from './data-services/superhero-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'superheroes';
  superheroes:Array<string>=[];

  constructor(superheroDataService: SuperheroDataService)
  {
    this.superheroes=superheroDataService.getSuperheroes()
    superheroDataService.getObservableSuperheroes().subscribe((s) => 
    {this.superheroes.push(s);
    console.log(s)})
    console.log(this.superheroes)
  }

  print_fly(e:String)
  {
    console.log(e);
  }
}
