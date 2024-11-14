import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperheroToolbarComponent } from './superhero-toolbar/superhero-toolbar.component';
import { SuperheroProfileComponent } from './superhero-profile/superhero-profile.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SuperheroToolbarComponent,
    SuperheroProfileComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule
  ],
  exports: [
    SuperheroToolbarComponent,
    SuperheroProfileComponent
  ] 
})
export class SuperheroesMaterialDesignModule { }
