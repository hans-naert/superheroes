import { Component } from '@angular/core';
import { Superhero } from '../models/superhero';
@Component({
  selector: 'app-create-superhero',
  templateUrl: './create-superhero.component.html',
  styleUrls: ['./create-superhero.component.css']
})
export class CreateSuperheroComponent {
 public superhero: Superhero;
  constructor() {
    this.superhero = new Superhero();
  }

  public save(event: Event) {
    console.log(`event :${event} superhero: ${JSON.stringify(this.superhero)}`);
  }
}
