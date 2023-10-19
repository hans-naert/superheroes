import { Component } from '@angular/core';
import { Superhero } from './superheroes-material-design/superhero-profile/superhero-profile.component';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'superheroes';

  constructor(private router: Router)
  {}

  navigate()
  {
    this.router.navigate(['home'])
  }
 
}
