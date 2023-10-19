import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuperheroProfileComponent } from './superhero-profile/superhero-profile.component';
import { SuperheroProfileFooterComponent } from './superhero-profile-footer/superhero-profile-footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SuperheroNewListComponent } from './superhero-new-list/superhero-new-list.component';
import { CreateSuperheroComponent } from './create-superhero/create-superhero.component';

import {MatFormFieldModule} from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';

import {MatSelectModule} from '@angular/material/select';

import {MatButtonModule} from '@angular/material/button';
import { CreateSuperheroReactiveFormComponent } from './create-superhero-reactive-form/create-superhero-reactive-form.component';
import {MatSliderModule} from '@angular/material/slider'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { SuperheroToolbarComponent } from './superhero-toolbar/superhero-toolbar.component';
import { SuperheorGridListComponent } from './superheor-grid-list/superheor-grid-list.component'


@NgModule({
  declarations: [
    SuperheroProfileComponent,
    SuperheroProfileFooterComponent,
    HomeComponent,
    SuperheroNewListComponent,
    CreateSuperheroComponent,
    CreateSuperheroReactiveFormComponent,
    SuperheroToolbarComponent,
    SuperheorGridListComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatSlideToggleModule,
  ],
  exports: [SuperheroProfileComponent, SuperheroProfileFooterComponent, HomeComponent, SuperheroNewListComponent, CreateSuperheroComponent, CreateSuperheroReactiveFormComponent, SuperheroToolbarComponent]
})
export class SuperheroesMaterialDesignModule { }
