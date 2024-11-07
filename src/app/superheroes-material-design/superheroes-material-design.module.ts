import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperheroToolbarComponent } from './superhero-toolbar/superhero-toolbar.component';
import { SuperheroProfileComponent } from './superhero-profile/superhero-profile.component';



@NgModule({
  declarations: [
    SuperheroToolbarComponent,
    SuperheroProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SuperheroToolbarComponent,
    SuperheroProfileComponent
  ] 
})
export class SuperheroesMaterialDesignModule { }
