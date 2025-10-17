import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { SuperheroToolbar } from './superhero-toolbar/superhero-toolbar';
import { SuperheroProfile } from './superhero-profile/superhero-profile';

@NgModule({
  declarations: [
    SuperheroToolbar,
    SuperheroProfile
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    SuperheroToolbar,
    SuperheroProfile
  ]
})
export class SuperheroesMaterialDesignModule { }
