import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SuperheroesMaterialDesignModule } from './superheroes-material-design/superheroes-material-design-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenForm } from './components/template-driven-form/template-driven-form';
import { ReactiveForm } from './components/reactive-form/reactive-form';
import { Demo } from './components/demo/demo';
import { HeroesList } from './components/heroes-list/heroes-list';

@NgModule({
  declarations: [
    App,
    TemplateDrivenForm,
    ReactiveForm,
    Demo,
    HeroesList
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    SuperheroesMaterialDesignModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
