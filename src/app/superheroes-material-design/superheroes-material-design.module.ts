import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuperheroProfileComponent } from './superhero-profile/superhero-profile.component';
import { SuperheroProfileFooterComponent } from './superhero-profile-footer/superhero-profile-footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SuperheroProfileComponent,
    SuperheroProfileFooterComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule
  ],
  exports: [SuperheroProfileComponent, SuperheroProfileFooterComponent]
})
export class SuperheroesMaterialDesignModule { }
