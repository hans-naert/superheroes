import { Component } from '@angular/core';
import { Superhero } from './superheroes-material-design/superhero-profile/superhero-profile.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'superheroes';

  fly(event: Superhero): void
  {
    console.log(event);
    this.title=event.name;
    console.log(JSON.stringify(event));
  }
}
