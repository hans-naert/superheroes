import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { SuperheroProfile } from './superhero-profile/superhero-profile';
import { SuperheroToolbar } from './superhero-toolbar/superhero-toolbar';

@NgModule({
  declarations: [SuperheroProfile, SuperheroToolbar],
  imports: [CommonModule, MatToolbarModule, MatCardModule],
  exports: [SuperheroProfile, SuperheroToolbar]
})
export class SuperheroesMaterialDesignModule {}
