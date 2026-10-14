import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { SuperheroProfile } from './superhero-profile/superhero-profile';
import { SuperheroToolbar } from './superhero-toolbar/superhero-toolbar';
import { SuperheroProfileFooter } from './superhero-profile-footer/superhero-profile-footer';

@NgModule({
  declarations: [SuperheroProfile, SuperheroToolbar, SuperheroProfileFooter],
  imports: [CommonModule, MatToolbarModule, MatCardModule],
  exports: [SuperheroProfile, SuperheroToolbar, SuperheroProfileFooter],
})
export class SuperheroesMaterialDesignModule {}
