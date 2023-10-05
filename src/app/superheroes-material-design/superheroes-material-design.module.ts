import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuperheroProfileComponent } from './superhero-profile/superhero-profile.component';
import { SuperheroProfileFooterComponent } from './superhero-profile-footer/superhero-profile-footer.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SuperheroNewListComponent } from './superhero-new-list/superhero-new-list.component';

@NgModule({
  declarations: [
    SuperheroProfileComponent,
    SuperheroProfileFooterComponent,
    HomeComponent,
    SuperheroNewListComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule
  ],
  exports: [SuperheroProfileComponent, SuperheroProfileFooterComponent, HomeComponent, SuperheroNewListComponent]
})
export class SuperheroesMaterialDesignModule { }
