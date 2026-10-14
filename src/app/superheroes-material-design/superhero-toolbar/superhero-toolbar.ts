import { Component } from '@angular/core';
import SuperheroText from '../utilities/superhero-text';
@Component({
  selector: 'app-superhero-toolbar',
  standalone: false,
  styleUrl: './superhero-toolbar.scss',
  template: `<mat-toolbar>
    <span>Superheroes</span>
  </mat-toolbar>`,
})
export class SuperheroToolbar {
  
}
