import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
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
    MatCardModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    SuperheroToolbar,
    SuperheroProfile,
    SuperheroProfileFooter
  ]
})
export class SuperheroesMaterialDesignModule { }
