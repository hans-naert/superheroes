import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { SuperheroToolbar } from './superhero-toolbar/superhero-toolbar';
import { SuperheroProfile } from './superhero-profile/superhero-profile';
import { SuperheroProfileFooter } from './superhero-profile-footer/superhero-profile-footer';

@NgModule({
  declarations: [
    SuperheroToolbar,
    SuperheroProfile,
    SuperheroProfileFooter
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
