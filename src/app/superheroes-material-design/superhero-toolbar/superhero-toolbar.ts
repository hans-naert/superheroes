import { Component } from '@angular/core';

@Component({
  selector: 'app-superhero-toolbar',
  standalone: false,
  styleUrl: './superhero-toolbar.scss',
  template: `<mat-toolbar>
    <span>Superheroes</span>
  </mat-toolbar>`,
})
export class SuperheroToolbar {}
